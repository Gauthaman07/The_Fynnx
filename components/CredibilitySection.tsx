
import React, { useEffect, useRef } from 'react';

const CredibilitySection: React.FC = () => {
  const principles = [
    { label: "01", title: "Architectural Rigor", text: "Systems are planned before code is written. Decisions are based on structure and logic, not guesswork." },
    { label: "02", title: "Debt Elimination", text: "Critical paths are designed to remain clean. Problems are addressed permanently, not deferred." },
    { label: "03", title: "Deep Documentation", text: "Every system is documented for longevity, ensuring ownership remains with your team." },
    { label: "04", title: "Validated Delivery", text: "Testing and validation are integral to every release, not an afterthought." }
  ];

  return (
    <section id="principles" className="py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-gray font-medium mb-6">CREDIBILITY</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-white">Engineered for Reliability.</h3>
            
            <p className="text-xl text-brand-gray leading-relaxed mb-12 max-w-xl font-body">
            Our engineering culture is built on clarity, discipline,
and documentation. We design systems meant to be understood,
maintained, and relied upon over time.

            </p>

            <div className="space-y-4">
              {principles.map((p, i) => (
                <div key={i} className="group p-6 border border-white/10 bg-white/[0.07] backdrop-blur-sm hover:bg-white/[0.12] hover:border-brand-blue/50 transition-all duration-300 cursor-default rounded-lg">
                  <div className="flex items-start gap-6">
                    <span className="text-brand-blue font-mono text-xs pt-1">{p.label}</span>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-brand-blue transition-colors">{p.title}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
             <SelfHealingGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

const SelfHealingGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientWidth; // Square aspect ratio
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Nodes setup
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      status: 'healthy' | 'infected' | 'healing';
      health: number; // 0 to 1
    }

    const nodes: Node[] = [];
    const nodeCount = 40;
    const connectionDistance = 100;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        status: 'healthy',
        health: 1
      });
    }

    let frameId: number;
    let lastInfectionTime = 0;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Random Infection Logic
      if (timestamp - lastInfectionTime > 2000) { // Every 2 seconds
        const healthyNodes = nodes.filter(n => n.status === 'healthy');
        if (healthyNodes.length > 0) {
          const target = healthyNodes[Math.floor(Math.random() * healthyNodes.length)];
          target.status = 'infected';
          target.health = 0;
          lastInfectionTime = timestamp;
        }
      }

      // Update & Draw Nodes
      nodes.forEach(node => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce bounds
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Healing Logic
        if (node.status === 'infected') {
           node.health += 0.01; // Slowly heal
           if (node.health >= 1) {
             node.status = 'healing'; // Transition state
             setTimeout(() => { node.status = 'healthy'; }, 500); // Quick flash then healthy
           }
        }

        // Draw Connections
        nodes.forEach(other => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            let alpha = 1 - dist / connectionDistance;
            
            if (node.status === 'infected' || other.status === 'infected') {
              ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`; // Red for debt/bug
            } else if (node.status === 'healing' || other.status === 'healing') {
               ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`; // Bright white flash for fix
            } else {
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.3})`; // Standard Blue
            }
            
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw Dots on top
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        if (node.status === 'infected') {
          ctx.fillStyle = '#EF4444'; // Red
          // Draw "warning" ring
          ctx.strokeStyle = '#EF4444';
          ctx.beginPath();
          ctx.arc(node.x, node.y, 10 * (1 - node.health), 0, Math.PI * 2); // Ring shrinks as it heals
          ctx.stroke();
        } else if (node.status === 'healing') {
          ctx.fillStyle = '#FFFFFF'; // White
        } else {
          ctx.fillStyle = '#3B82F6'; // Blue
        }
        ctx.fill();
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-square bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
       {/* Canvas Layer */}
       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
       
       {/* HUD Overlay */}
       <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">Self-Healing Grid</span>
          </div>
          <span className="text-[9px] font-mono text-zinc-500 uppercase">Auto-Detection Active</span>
       </div>

       {/* Scanline Effect */}
       <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-scan pointer-events-none" style={{ height: '20%' }} />
    </div>
  );
};

export default CredibilitySection;
