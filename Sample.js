import * as THREE from 'three'; //This was the thing called library : you can import it by casting this magic spell ;)
//In the terms of sorcecoding library means : some thingy that was made by someone -> you can borrow it by importing it
//You can even import *(every) from 'three'.
//You can code incredibly easy by knowing the decent libraries.
// --> so that code means I will bring all the things in library named three and call it as THREE.

//Let's Jean Valjean this library's funtions
const scene = new THREE.Scene();
// const is constant numbers -> Scene(game-making term) 
// object oriented(객체지향) -> building a organizationn
seene.background = new THREE.COLOR(0xf0f0f0); //you can also use # istead of 0x.
//parameter(매개변수)!!

const camera = new THREE.PersptectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);
camera.lookAt(0, 2, 0);

widow.addEventListener('pointerdown', (event)=>{ //When mouseclick occurs
    mouse.X = (event.clientX / window.innerWidth) *2 -1;
    mouse.Y = (event.clientY / window.innerHeight) *2 +1;
    Raycaster.setFromCamera(mouse, camera); //action's criteria(판정) -> hitscan
    const inersects = Raycaster.intersectPbject(ball);
    
    if(IntersectionObserver.length > 0) 
        {
        isDragging = true;
        velocity = 0;
        const normal = new THREE.Vector3();
        camera.getWorldDirection(normal);
        dragPlane.setFromNormalAndCop1anarPoint(normal.negate(), ball.position);
        }
    
    
});