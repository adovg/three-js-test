
////////////////////// get figure from input
let choseFigure = () => {
	let valueOfGigure = document.getElementById('figure-list').value;
	console.log(valueOfGigure);

	if (valueOfGigure == 'Sphere') {
		generateSphere(width, height);
	}else if (valueOfGigure == 'Pyramid') {
		generatePyramid(width, height);
	}else if (valueOfGigure == 'Cube') {
		generateCube(width, height);
	}else {
		alert('Выберите фигуру');
	}
}
////////////////////// get figure from input



/////////////////////////////////////////////////////////////////////////// create scene
let width = window.innerWidth;
let height = window.innerHeight;
let canvas = document.getElementById('canvas');

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setClearColor(0x000000);

//renderer.setSize( window.innerWidth, window.innerHeight );
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
camera.position.set(0, 0, 1000);

let light = new THREE.AmbientLight(0xffffff);
scene.add(light);

//console.log( renderer.domElement.appendChild )




/////////////////////////////////////////////////////////////////////////// create scene



///////////////////////////////// create sphere
function generateSphere () {

let geometry = new THREE.SphereGeometry(200, 120, 120);
//let material = new THREE.MeshNormalMaterial();
let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});

let sphere = new THREE.Mesh(geometry, material);
//sphere.position.set(Math.random() * 1000 - height, Math.random() * 1000 - width )
//sphere.position.y += 200;
 sphere.position.y += sphere.positionY;
// sphere.position.z += sphere.positionZ;

scene.add(sphere);
// console.log(sphere.uuid);




let deleteSphereBtn = document.getElementById('btn-delete');

deleteSphereBtn.onclick = () => {
	let lastIndex = scene.children.length - 1;
	endElement = scene.children[lastIndex]; 
	scene.remove(endElement);
	console.log('done');
};


	function refresh () {
		sphere.rotation.x += 0.001;
		renderer.render(scene, camera);
		requestAnimationFrame( () => { refresh() } );
	};

	refresh();

};
///////////////////////////////// create sphere


///////////////////////////////// create cube
function generateCube (width, height) {
	let geometry = new THREE.BoxGeometry( 300, 300, 300 );
	let material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
	let cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	//renderer.render(scene, camera);
	//console.log(width);
	cube.position.x = Math.random() * width - height;
	cube.position.y = Math.random() * width - height;
	cube.position.z = Math.random() * width - height;
	//console.log('cube');

	function refresh () {
		//cube.rotation.y += 0.001;
		renderer.render(scene, camera);
		requestAnimationFrame( () => { refresh() } );
	};

	refresh();
	//console.log(cube.uuid);
	
	///////////////////////////////////////////////////////////////////// создаем параграфы с id 
	let idItem = document.createElement("p");
	idItem.classList.add('item-uuid');
	idItem.style.cursor = "pointer";
	idItem.innerHTML = cube.uuid;
	//document.getElementById("element-uuid").appendChild(idItem);
	 let idOfDiv = document.getElementById("element-uuid");
	// console.log(idOfDiv);
	 idOfDiv.appendChild(idItem);
	//  console.log(idItem);
	//  console.log(cube.uuid);
	//  console.log(this.uuid);

	 idItem.onclick = () => {

		for(let i = 0; i <= scene.children.length; i++) {
			console.log(scene.children[i].uuid);

			if (cube.uuid || sphere.uuid || pyramid.uuid == scene.children[i].uuid) {
				console.log('true')
				scene.remove(scene.children[i]);
			}
		}

		// if (idItem ) {
		// 	console.log(scene.children)
		// 	//console.log( 'this.focused.name: ' + this.name );
		// console.log(`${this.uuid} ,if work`)
			
		// 	//scene.remove(cube)
		// }

	}
};
///////////////////////////////// create sphere




///////////////////////////////// create pyramid
function generatePyramid () {
	const geometry = new THREE.ConeGeometry( 200, 300, 3 );
	const material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
	const pyramid = new THREE.Mesh( geometry, material );
	scene.add( pyramid );

	console.log('pyramid');

	function refresh () {
		pyramid.rotation.y += 0.001;
		renderer.render(scene, camera);
		requestAnimationFrame( () => { refresh() } );
	};

	refresh();


};

///////////////////////////////// create sphere













/////////////create UUID

// function uuidv4() {
// 	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
// 	  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
// 	  return v.toString(16);
// 	});
//   }
  
//   console.log(uuidv4());

  //////////////