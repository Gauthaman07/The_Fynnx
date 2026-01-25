import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initParticles();
      }
    };

    class Particle {
      x: number;
      y: number;
      speed: number;
      length: number;
      color: string;
      baseY: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseY = this.y;
        this.speed = Math.random() * 3 + 2; // Fast moving "trends"
        this.length = Math.random() * 100 + 50;
        // Shades of gray for the "noise"
        this.color = `rgba(200, 200, 200, ${Math.random() * 0.5 + 0.1})`;
      }

      update(width: number, height: number, mouseX: number, mouseY: number) {
        this.x += this.speed;
        if (this.x > width) {
          this.x = -this.length;
          this.y = Math.random() * height;
          this.baseY = this.y;
        }

        // Mouse interaction: Repel from mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          this.y += forceDirectionY * force * 5;
          this.x += forceDirectionX * force * 5;
        } else {
          // Return to original Y slowly
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy * 0.05;
          }
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.length, 2); // Draw as lines
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = 100; // Number of trend lines
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get mouse position relative to canvas
      const rect = canvas.getBoundingClientRect();
      const relativeMouseX = mouseRef.current.x - rect.left;
      const relativeMouseY = mouseRef.current.y - rect.top;

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height, relativeMouseX, relativeMouseY);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-4 md:mx-10 my-24 h-[600px] bg-white rounded-[3rem] overflow-hidden flex items-center justify-center shadow-sm border border-slate-100"
    >
      {/* Canvas for "Trend Lines" */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* The Monolith Text */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/50 shadow-2xl ring-1 ring-slate-900/5"
        >
          <blockquote className="space-y-6">
            <p className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-slate-900 tracking-tight">
              We don’t chase trends.
            </p>
            <p className="font-heading font-medium text-2xl md:text-4xl text-slate-500">
              We engineer what survives them.
            </p>
          </blockquote>
        </motion.div>
      </div>

      {/* Aesthetic decorative corners */}
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-slate-300 rounded-tr-md" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-slate-300 rounded-bl-md" />
    </section>
  );
};

export default PhilosophySection;