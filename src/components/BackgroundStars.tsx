import { useEffect, useRef } from "react";

export default function BackgroundStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Stars data
    const starCount = 120;
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Gold energy particles (flares)
    const particleCount = 25;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      maxAlpha: number;
      growSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5,
        maxAlpha: Math.random() * 0.4 + 0.2,
        growSpeed: Math.random() * 0.005 + 0.002,
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep celestial blue/indigo subtle background gradient to blend with the #030303 body
      const gradient = ctx.createRadialGradient(
        width / 2,
        0,
        height * 0.2,
        width / 2,
        height / 2,
        width
      );
      gradient.addColorStop(0, "rgba(8, 7, 28, 0.4)");
      gradient.addColorStop(0.5, "rgba(3, 3, 5, 0.2)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and update stars (twinkling)
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        
        // Re-generate stars if viewport resized outward
        if (star.x > width) star.x = Math.random() * width;
        if (star.y > height) star.y = Math.random() * height;

        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(star.opacity, 0.9))})`;
        ctx.fill();
      }

      // Draw and update gold energy particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Particle motion
        p.y += p.speedY;
        p.x += p.speedX;

        // Alpha pulsing
        p.alpha += p.growSpeed;
        if (p.alpha > p.maxAlpha || p.alpha < 0.05) {
          p.growSpeed = -p.growSpeed;
        }

        // Recycle particles when they exit the top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.radius = Math.random() * 3 + 1;
          p.alpha = 0.1;
        }

        // Draw gold circular particle with shadow blur
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Golden glowing gradient
        const pGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        pGlow.addColorStop(0, `rgba(247, 238, 214, ${p.alpha})`);
        pGlow.addColorStop(0.4, `rgba(197, 141, 52, ${p.alpha * 0.8})`);
        pGlow.addColorStop(1, "rgba(197, 141, 52, 0)");
        
        ctx.fillStyle = pGlow;
        ctx.fill();
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 141, 52, ${p.alpha * 0.15})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
      id="cosmic-canvas"
    />
  );
}
