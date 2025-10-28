'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  decay: number;
  color: string;
}

export function FireParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const colors = [
      '#D6001C', // Brand Red
      '#FF6B35', // Brand Orange
      '#FDB913', // Brand Yellow
      '#FF4500', // Darker Orange
      '#FFD700', // Gold
    ];

    // Create particles
    const createParticle = (x?: number, y?: number) => {
      const particle: Particle = {
        x: x ?? Math.random() * canvas.width,
        y: y ?? canvas.height + 20,
        vx: (Math.random() - 0.5) * 1,
        vy: -(Math.random() * 2 + 1),
        size: Math.random() * 4 + 2,
        life: 1,
        decay: Math.random() * 0.01 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      particles.push(particle);
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new particles
      if (Math.random() > 0.8) {
        for (let i = 0; i < 2; i++) {
          createParticle(Math.random() * canvas.width);
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.02; // Gravity (upward for fire)
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.life * 0.8;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
