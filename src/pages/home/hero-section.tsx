import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Logo3DModel } from "../../components";

const HeroSection: React.FC = () => (
  <div className="container mb-5">
    <div className="hero-section-bg" />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6">
        <h1 className="home-header-title">MS CLUB OF SLIIT</h1>
        <p className="home-header-description">
          A volunteer-driven student community aiming to bridge the skill gap
          between an Undergraduate and an Industry Professional.
        </p>
        <a
          href="/join-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn home-primary-btn">Join Now</button>
        </a>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6 home-3d-model">
        <Canvas shadows camera={{ position: [0, 0, 1.6], fov: 45 }}>
          <fog attach="fog" args={["#f5f5f5", 0, 40]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={0.5}
          />
          <pointLight position={[0, 1, 10]} intensity={0.2} />
          <OrbitControls
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            maxDistance={2}
            minDistance={1.6}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.6}
            rotateSpeed={0.1} />
          <Suspense fallback={null}>
            <Logo3DModel />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.4, 0]} opacity={0.55} width={10} height={10} blur={1} far={9} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  </div>
);

export default HeroSection;
