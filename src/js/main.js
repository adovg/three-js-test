window.onload = () => {}
// import { OrbitControls } from '../../libs/OrbitControls';

let createScale = () => {
	let userScale = document.getElementById('scale').value;
	
	let withOfFigure = userScale[0];
	
	let heightOfFigure = userScale[1];
	let depthOfFigure = userScale[2];
	let arrOfScale =  [withOfFigure, heightOfFigure, depthOfFigure];
	return arrOfScale;
};



////////////////////// get figure from input
let choseFigure = () => {
	let valueOfGigure = document.getElementById('figure-list').value;
	

	

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



// 	renderer.render( scene, camera );



let light = new THREE.AmbientLight(0xffffff);
scene.add(light);

/////////////////////////////////////////////////////////////////////////// create scene



///////////////////////////////// create sphere
function generateSphere (width, height) {

let geometry = new THREE.SphereGeometry(200, 120, 120);
let material = new THREE.MeshNormalMaterial();
//let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});

let sphere = new THREE.Mesh(geometry, material);
//withOfFigure, heightOfFigure, depthOfFigure
//
// createScale();
// console.log(arrOfScale);
let sphereScale = createScale();
sphere.scale.set(sphereScale[0], sphereScale[1], sphereScale[0]);
//sphere.scale.set(withOfFigure, heightOfFigure, depthOfFigure);
sphere.position.x = Math.random() * width - height;
sphere.position.y = Math.random() * width - height;
sphere.position.z = Math.random() * width - height;


function createMeshId () {
	let idItem = document.createElement("p");
	idItem.classList.add('item-uuid');
	idItem.style.cursor = "pointer";
	idItem.innerHTML = sphere.uuid;

	 let idOfDiv = document.getElementById("element-uuid");
	 idOfDiv.appendChild(idItem);

	 idItem.onclick = () => {
		for(let i = 0; i <= scene.children.length; i++) {
			if (sphere.uuid == scene.children[i].uuid) {
				scene.remove(scene.children[i]);
				idOfDiv.removeChild(idItem);
			}
		}

	}
};

createMeshId ();

scene.add(sphere);

	function refresh () {
		sphere.rotation.x += 0.001;
		renderer.render(scene, camera);
		requestAnimationFrame( () => { refresh() } );
	};

	refresh();

}; ///////////////////////////////// create sphere


///////////////////////////////// create cube
function generateCube (width, height) {
	const geometry = new THREE.BoxGeometry( 300, 300, 300 );
	//let material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
	const material = new THREE.MeshNormalMaterial();
	const cube = new THREE.Mesh( geometry, material );
	//console.log(withOfFigure, heightOfFigure, depthOfFigure);
	scene.add( cube );

	//cube.scale.set(withOfFigure, heightOfFigure, depthOfFigure);
	
	cube.position.x = Math.random() * width - height;
	cube.position.y = Math.random() * width - height;
	cube.position.z = Math.random() * width - height;

	let cubeScale = createScale();
	cube.scale.set(cubeScale[0], cubeScale[1], cubeScale[0]);

	function refresh () {
		
		renderer.render(scene, camera);
		requestAnimationFrame( () => { refresh() } );
	};

	refresh();
	
	let idItem = document.createElement("p");
	idItem.classList.add('item-uuid');
	idItem.style.cursor = "pointer";
	idItem.innerHTML = cube.uuid;

	 let idOfDiv = document.getElementById("element-uuid");
	 idOfDiv.appendChild(idItem);

	 idItem.onclick = () => {
		for(let i = 0; i <= scene.children.length; i++) {
			if (cube.uuid == scene.children[i].uuid) {
				scene.remove(scene.children[i]);
				idOfDiv.removeChild(idItem);
			}
		}

	}

};
///////////////////////////////// create cube




///////////////////////////////// create pyramid
function generatePyramid (width, height) {
	const geometry = new THREE.ConeGeometry( 200, 300, 3 );
	const material = new THREE.MeshNormalMaterial()
	const pyramid = new THREE.Mesh( geometry, material );
	scene.add( pyramid );

	pyramid.position.x = Math.random() * width - height;
	pyramid.position.y = Math.random() * width - height;
	pyramid.position.z = Math.random() * width - height;

	let pyramidScale = createScale();
	cube.scale.set(pyramidScale[0], pyramidScale[1], pyramidScale[0]);	

	function createMeshId () {
		let idItem = document.createElement("p");
		idItem.classList.add('item-uuid');
		idItem.style.cursor = "pointer";
		idItem.innerHTML = pyramid.uuid;
	
		 let idOfDiv = document.getElementById("element-uuid");
		 idOfDiv.appendChild(idItem);
	
		 idItem.onclick = () => {
			for(let i = 0; i <= scene.children.length; i++) {
				if (pyramid.uuid == scene.children[i].uuid) {
					scene.remove(scene.children[i]);
					idOfDiv.removeChild(idItem);
				}
			}
	
		}
	};
	
	createMeshId ();



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