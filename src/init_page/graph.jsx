import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

const DataFlowSeparator = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const lastTimeRef = useRef(0);
  
  const animProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 100; // Adjust height as needed
      createParticles();
    };

    const createParticles = () => {
      const particleCount = Math.floor(canvas.width / 20); // Maintain your adjusted density
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2,
        color: [67, 56, 202] // RGB values for the color
      }));
    };

    const drawParticles = (currentTime) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const fadeWidth = canvas.width * 0.1; // 10% of the canvas width

      particlesRef.current.forEach(particle => {
        let opacity = 1;

        // Fade in
        if (particle.x < fadeWidth) {
          opacity = particle.x / fadeWidth;
        }
        // Fade out
        else if (particle.x > canvas.width - fadeWidth) {
          opacity = (canvas.width - particle.x) / fadeWidth;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${opacity})`;
        ctx.fill();

        particle.x += particle.speed * (deltaTime / 16); // Normalize speed based on 60fps
        if (particle.x > canvas.width) {
          particle.x = 0;
          particle.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    animationFrameId = requestAnimationFrame(drawParticles);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <animated.div style={animProps} className="bg-background_color w-full h-24 flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </animated.div>
  );
};

export default DataFlowSeparator;
