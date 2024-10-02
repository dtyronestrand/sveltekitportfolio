<script lang='ts'>
    import {T as Threlte} from "@threlte/core"  ;
    import * as THREE from 'three';
	import Geometry from "./Geometry.svelte";
</script>

<Threlte.PerspectiveCamera makeDefault position={[0,0,25]} aspect={1} fov={30} near={1} far={40}/>
<Geometry position={[0,0,0]} rate={0.3} geometry={new THREE.IcosahedronGeometry(3)}/>
<Geometry position={[1,-0.75,4]} rate={0.4} geometry={new THREE.CapsuleGeometry(0.5,1.6,2,16)}/>

<Threlte.DirectionalLight position{(5, 15, 50)} intensity={25}></Threlte.DirectionalLight>
