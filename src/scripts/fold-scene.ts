// Opposing folded ribbons bridge in depth. Scroll releases their six joints.
export async function initFoldScene() {
 const host = document.querySelector<HTMLElement>('#fold-canvas');
 const track = document.querySelector<HTMLElement>('.object-track');
 const room = document.querySelector<HTMLElement>('.object-room');
 if (!host || !track || !room) return;
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 const arrival = document.querySelector<HTMLElement>('.arrival-copy')!;
 const bottom = document.querySelector<HTMLElement>('.arrival-bottom')!;
 const opening = document.querySelector<HTMLElement>('.unfold-copy')!;
 let disposed = false;
 function staticFallback() {
  track!.dataset.static='true';
 }
 if(reduced.matches) { staticFallback(); return; }
 const THREE = await import('three').catch(()=>null);
 if(!THREE) { staticFallback(); return; }
 let renderer: InstanceType<typeof THREE.WebGLRenderer>;
 try { renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true, powerPreference:'low-power' }); } catch { staticFallback(); return; }
 renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.25 : 1.5));
 renderer.setClearColor(0,0); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
 host.append(renderer.domElement); host.parentElement!.dataset.ready = 'true';
 const scene = new THREE.Scene();
 const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js');
 const environmentScene = new RoomEnvironment();
 const environmentGenerator = new THREE.PMREMGenerator(renderer);
 const environment = environmentGenerator.fromScene(environmentScene,.06);
 scene.environment=environment.texture; scene.environmentIntensity=.75;
 environmentScene.dispose(); environmentGenerator.dispose();
 const camera = new THREE.PerspectiveCamera(34,1,.1,50); camera.position.set(0,.1,13.2);
 const assembly = new THREE.Group(); scene.add(assembly);
 const graphite = new THREE.MeshStandardMaterial({color:0x343431,metalness:.65,roughness:.38,side:THREE.DoubleSide});
 const copper = new THREE.MeshStandardMaterial({color:0xba714a,metalness:.7,roughness:.3});
 const cut = new THREE.MeshStandardMaterial({color:0x1d1c19,metalness:.4,roughness:.45});
 scene.add(new THREE.HemisphereLight(0xfff4e5,0x211b16,1.7));
 const key = new THREE.DirectionalLight(0xfff2e0,4); key.position.set(-3,6,7); scene.add(key);
 const rim = new THREE.DirectionalLight(0xcb7944,3); rim.position.set(5,-2,4); scene.add(rim);
 const fill = new THREE.DirectionalLight(0xf1eee5,2); fill.position.set(-5,-1,0); scene.add(fill);
 type Point = [number,number,number];
 const pieces: {mesh: InstanceType<typeof THREE.Mesh>; center: InstanceType<typeof THREE.Vector3>; direction: number}[] = [];
 function plate(a:Point,b:Point,c:Point,d:Point,direction:number,aperture=false) {
  const corners = [a,b,c,d]; const center = new THREE.Vector3(); corners.forEach(v=>center.add(new THREE.Vector3(...v))); center.divideScalar(4);
  const positions:number[]=[];
  const verts = [...corners,...corners.map(v=>[v[0],v[1],v[2]-.14])];
  let faces = [[0,1,2,0,2,3],[7,6,5,7,5,4],[0,4,5,0,5,1],[1,5,6,1,6,2],[2,6,7,2,7,3],[3,7,4,3,4,0]];
  let materials = [0,2,1,1,1,1];
  if(aperture) {
   // Four inset corners cut a long opening through the diagonal. Two narrow
   // structural rails remain, carrying tension around an absence of material.
   const inset = corners.map(v=>[center.x+(v[0]-center.x)*.68,center.y+(v[1]-center.y)*.68,center.z+(v[2]-center.z)*.68]);
   verts.push(...inset,...inset.map(v=>[v[0],v[1],v[2]-.14]));
   faces=[]; materials=[];
   for(let i=0;i<4;i++){const j=(i+1)%4;faces.push([i,j,j+8,i,j+8,i+8],[i+4,i+12,j+12,i+4,j+12,j+4],[i,i+4,j+4,i,j+4,j],[i+8,j+8,j+12,i+8,j+12,i+12]);materials.push(0,2,1,1);}
  }
  const geometry = new THREE.BufferGeometry();
  faces.forEach((face,i)=> { face.forEach(index=> { const p=verts[index]; positions.push(p[0]-center.x,p[1]-center.y,p[2]-center.z); }); geometry.addGroup(i*6,6,materials[i]); });
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3)); geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry,[graphite,copper,cut]); mesh.position.copy(center); assembly.add(mesh); pieces.push({mesh,center,direction});
 }
 // End folds turn back into the negative space; the long diagonals pass at different depths.
 plate([-2.7,1.6,.15],[-1.3,2.2,.15],[-.7,1.45,.65],[-2.1,.85,.65],-1);
 plate([-2.1,.85,.65],[-.7,1.45,.65],[2.1,-1.25,.35],[.7,-1.85,.35],-1,true);
 plate([.7,-1.85,.35],[2.1,-1.25,.35],[2.7,-.6,-.25],[1.3,-1.2,-.25],-1);
 plate([-2.7,-1.4,-.25],[-1.3,-2,-.25],[-.7,-1.25,-.7],[-2.1,-.65,-.7],1);
 plate([-2.1,-.65,-.7],[-.7,-1.25,-.7],[2.1,1.45,-.35],[.7,2.05,-.35],1,true);
 plate([.7,2.05,-.35],[2.1,1.45,-.35],[2.7,.8,.25],[1.3,1.4,.25],1);
 let target=0, progress=0, px=0,py=0,sx=0,sy=0,frame=0,visible=true;
 const clamp=(n:number)=>Math.max(0,Math.min(1,n));
 function measure() { if (!host) return; renderer.setSize(host.clientWidth,host.clientHeight); camera.aspect=host.clientWidth/host.clientHeight; camera.updateProjectionMatrix(); scroll(); }
 function scroll() { if (!track || !room) return; target=clamp(-track.getBoundingClientRect().top / Math.max(1,track.offsetHeight-room.offsetHeight)); request(); }
 function pointer(e:PointerEvent) { if(reduced.matches || e.pointerType==='touch') return; px=(e.clientX/innerWidth-.5)*.13; py=(e.clientY/innerHeight-.5)*.1; request(); }
 function draw() {
  frame=0; if(disposed || !visible || document.hidden) return;
  progress=reduced.matches?0:progress+(target-progress)*.075; sx+=(px-sx)*.06; sy+=(py-sy)*.06;
  assembly.rotation.set(.32+sy,-.55+sx+progress*.45,-.2-progress*.11); assembly.scale.setScalar(innerWidth<700?.87:1.02);
  pieces.forEach(({mesh,center,direction},i)=> { mesh.position.copy(center); mesh.position.x+=direction*progress*(.8+(i%3)*.28); mesh.position.y+=(i%3-1)*progress*.9; mesh.position.z+=progress*(i%3-1)*1.2; mesh.rotation.y=direction*progress*.48; mesh.rotation.x=(i%3-1)*progress*.28; });
  if(!reduced.matches) { const reveal=clamp((progress-.24)/.27); arrival.style.opacity=String(1-reveal); arrival.style.visibility=reveal>.99?'hidden':'visible'; bottom.style.opacity=String(1-reveal); bottom.style.visibility=reveal>.99?'hidden':'visible'; opening.style.opacity=String(reveal); opening.style.visibility=reveal>.01?'visible':'hidden'; }
  renderer.render(scene,camera);
  if(!reduced.matches && (Math.abs(target-progress)>.0002 || Math.abs(px-sx)>.0002 || Math.abs(py-sy)>.0002)) request();
 }
 function request() { if(!frame&&!disposed&&visible&&!document.hidden) frame=requestAnimationFrame(draw); }
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting; if(visible) {scroll(); request();} else {cancelAnimationFrame(frame);frame=0;} }); observer.observe(track);
 function preference() { arrival.style.cssText=''; bottom.style.cssText=''; opening.style.cssText=''; px=py=sx=sy=0; request(); }
 function visibility() { if(document.hidden){cancelAnimationFrame(frame);frame=0;}else request(); }
 const resize=new ResizeObserver(measure); resize.observe(host);
 window.addEventListener('scroll',scroll,{passive:true}); window.addEventListener('pointermove',pointer,{passive:true}); document.addEventListener('visibilitychange',visibility); reduced.addEventListener('change',preference);
 document.querySelector('.arrival-bottom a')?.addEventListener('click',e=>{if(reduced.matches)return;e.preventDefault();window.scrollTo({top:track.offsetTop+(track.offsetHeight-room.offsetHeight)*.75,behavior:'smooth'});});
 window.addEventListener('pageshow',()=>{if(!disposed)request();});
 window.addEventListener('pagehide',(event)=>{cancelAnimationFrame(frame);frame=0;if(event.persisted)return;disposed=true;observer.disconnect();resize.disconnect();window.removeEventListener('scroll',scroll);window.removeEventListener('pointermove',pointer);document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',preference);pieces.forEach(p=>p.mesh.geometry.dispose());graphite.dispose();copper.dispose();cut.dispose();environment.dispose();renderer.dispose();});
 measure(); request();
}
