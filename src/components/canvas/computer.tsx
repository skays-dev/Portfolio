import { FC, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

import CanvasLoader from "../loader";

interface computerProps {
    isMobile: boolean
}

const Computers: FC<computerProps> = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={4} groundColor='black' />
            <SpotLight
                position={[-20, 50, 10]} // Place the spotlight at the top (adjust the Y-coordinate as needed)
                angle={0.12} // Set a wider angle to make it look like a lamp
                penumbra={1} // Adjust the penumbra to control the softness of the light
                intensity={1} // Adjust the intensity as desired
                castShadow // Enable shadow casting for the spotlight
            />
            <pointLight intensity={4} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 1}
                position={isMobile ? [0, -3, -2.2] : [0, -1.5, -1.5]}
                rotation={isMobile? [-0.01, -0.2, -0.1]: [0,-0.8,-0.01]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
