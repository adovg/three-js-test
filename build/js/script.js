let choseFigure=()=>{let e=document.getElementById("figure-list").value;console.log(e),"Sphere"==e?generateSphere(width,height):"Pyramid"==e?generatePyramid(width,height):"Cube"==e?generateCube(width,height):alert("Выберите фигуру")},width=window.innerWidth,height=window.innerHeight,canvas=document.getElementById("canvas");canvas.setAttribute("width",width),canvas.setAttribute("height",height);const renderer=new THREE.WebGLRenderer({canvas:canvas});renderer.setClearColor(0);const scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(45,width/height,.1,5e3);camera.position.set(0,0,1e3);let light=new THREE.AmbientLight(16777215);function generateSphere(){let e=new THREE.SphereGeometry(200,120,120),n=new THREE.MeshBasicMaterial({color:65280,wireframe:!0}),t=new THREE.Mesh(e,n);t.position.y+=t.positionY,scene.add(t),document.getElementById("btn-delete").onclick=(()=>{let e=scene.children.length-1;endElement=scene.children[e],scene.remove(endElement),console.log("done")}),function e(){t.rotation.x+=.001,renderer.render(scene,camera),requestAnimationFrame(()=>{e()})}()}function generateCube(e,n){let t=new THREE.BoxGeometry(300,300,300),r=new THREE.MeshBasicMaterial({color:65280,wireframe:!0}),i=new THREE.Mesh(t,r);scene.add(i),i.position.x=Math.random()*e-n,i.position.y=Math.random()*e-n,i.position.z=Math.random()*e-n,function e(){renderer.render(scene,camera),requestAnimationFrame(()=>{e()})}();let o=document.createElement("p");o.classList.add("item-uuid"),o.style.cursor="pointer",o.innerHTML=i.uuid,document.getElementById("element-uuid").appendChild(o),o.onclick=(()=>{for(let e=0;e<=scene.children.length;e++)console.log(scene.children[e].uuid),(i.uuid||sphere.uuid||pyramid.uuid==scene.children[e].uuid)&&(console.log("true"),scene.remove(scene.children[e]))})}function generatePyramid(){const e=new THREE.ConeGeometry(200,300,3),n=new THREE.MeshBasicMaterial({color:16776960,wireframe:!0}),t=new THREE.Mesh(e,n);scene.add(t),console.log("pyramid"),function e(){t.rotation.y+=.001,renderer.render(scene,camera),requestAnimationFrame(()=>{e()})}()}scene.add(light);