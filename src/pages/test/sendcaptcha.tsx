import { useEffect, useRef, useState } from "react";
// @ts-ignore
import * as THREE from "three";

const App = () => {

  const mountRef = useRef(null);
  const [col,setcolor] = useState(true)

  const transcolor = ()=>{
    console.log(col);
    setcolor(!col);
  }

  useEffect(() => {
    var scene = new THREE.Scene();
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xb9d3ff, 1);
    renderer.setSize( window.innerWidth, window.innerHeight );

    var geometry = new THREE.BoxGeometry(100, 100, 100);
    var material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    var cube = new THREE.Mesh(geometry,material)
    scene.add(cube)

    var point = new THREE.PointLight(0xffffff);
    point.position.set(400,200,300);
    scene.add(point);

    var ambientlight = new THREE.AmbientLight(0x444444);
    scene.add(ambientlight);

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(200,300,200);
    camera.lookAt(scene.position);


    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // @ts-ignore
    mountRef.current.appendChild( renderer.domElement );
    // @ts-ignore
    return () => mountRef.current.removeChild( renderer.domElement);
  }, );

  return (
    <div>
      <button onClick={transcolor}>切换颜色</button>
      <div ref={mountRef}>
      </div>
    </div>
  );
}

export default App;

