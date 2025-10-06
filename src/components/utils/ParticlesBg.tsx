// src/components/ParticlesBG.tsx
import Particles from "@tsparticles/react";

export default function ParticlesBG() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 30 },
          size: { value: 2 },
          color: { value: "#9ca3af" },
          move: { enable: true, speed: 0.3 },
          links: {
            enable: true,
            distance: 130,
            color: "#cbd5e1",
            opacity: 0.2,
          },
        },
      }}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  );
}
