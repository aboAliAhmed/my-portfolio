"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "@tsparticles/engine";
import { useTheme } from "next-themes"; 

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const initializeParticles = async (engine: Engine) => {
      // Initialize the particles engine
      await loadFull(engine);
      setInit(true);
    };

    initializeParticles(window.tsParticles);
  }, []);

  const particlesLoaded = (container?: Container) => {
    return Promise.resolve<void>(console.log(container));
  };

  const particleColor = theme === "dark" ? "#000033" : "#16008d";
  const linkColor = theme === "dark" ? "#8f8f8f" : "#008d73";


  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  delay: 0.5,
                  enable: true
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: linkColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  height:1920,
                  width: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
