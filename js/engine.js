let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x20232a);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera.position.set(0, 3, 8);

    addLights();
    createTable();
    createTransformer();
    createVariac();
    createVoltmeter();
     createAmmeter();
     createWattmeter();

    animate();
}

function addLights() {

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);
}

function createTable() {

    const geometry = new THREE.BoxGeometry(10, 0.5, 6);

    const material = new THREE.MeshStandardMaterial({
        color: 0x8b5a2b
    });

    const table = new THREE.Mesh(geometry, material);

    table.position.y = -2;

    scene.add(table);
}

function createTransformer(){

    const loader = new THREE.TextureLoader();

    const texture = loader.load("assets/transformer.jpg");

    const geometry = new THREE.BoxGeometry(3,2,0.5);

    const material = new THREE.MeshStandardMaterial({
        map: texture
    });

    const transformer = new THREE.Mesh(geometry, material);

    transformer.position.set(1,-1,0);

    scene.add(transformer);
}

function createVariac(){

    const loader = new THREE.TextureLoader();

    const texture = loader.load("assets/variac.jpg");

    const geometry = new THREE.BoxGeometry(2,1.5,2);

    const material = new THREE.MeshStandardMaterial({
        map: texture
    });

    const variac = new THREE.Mesh(geometry, material);

    variac.position.set(-3,-1.2,0);

    scene.add(variac);
}
=function createVoltmeter(){

    const loader = new THREE.TextureLoader();

    const texture = loader.load("assets/voltmeter.jpg");

    const geometry = new THREE.BoxGeometry(1.2,1.2,0.4);

    const material = new THREE.MeshStandardMaterial({
        map: texture
    });

    const voltmeter = new THREE.Mesh(geometry, material);

    voltmeter.position.set(3.5,-1,-1);

    scene.add(voltmeter);
}

function createAmmeter(){

    const loader = new THREE.TextureLoader();

    const texture = loader.load("assets/ammeter.jpg");

    const geometry = new THREE.BoxGeometry(1.2,1.2,0.4);

    const material = new THREE.MeshStandardMaterial({
        map: texture
    });

    const ammeter = new THREE.Mesh(geometry, material);

    ammeter.position.set(3.5,-1,1);

    scene.add(ammeter);
}
function createWattmeter(){

    const loader = new THREE.TextureLoader();

    const texture = loader.load("assets/wattmeter.jpg");

    const geometry = new THREE.BoxGeometry(1.5,1.5,0.5);

    const material = new THREE.MeshStandardMaterial({
        map: texture
    });

    const wattmeter = new THREE.Mesh(geometry, material);

    wattmeter.position.set(0,-1,-2);

    scene.add(wattmeter);
}

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

window.onload = init;
