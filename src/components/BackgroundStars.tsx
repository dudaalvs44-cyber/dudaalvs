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

    // Pre-calculate rgba strings to avoid garbage collection overhead in the rendering loop
    const starColorCache: string[] = [];
    const goldColorCache: string[] = [];
    for (let i = 0; i <= 100; i++) {
      const opacity = i / 100;
      starColorCache.push(`rgba(255, 255, 255, ${parseFloat(Math.max(0.1, Math.min(opacity, 0.85)).toFixed(3))}`);
      goldColorCache.push(`rgba(197, 141, 52, ${parseFloat(Math.max(0.05, Math.min(opacity, 0.5)).toFixed(3))}`);
    }

    // Dynamic resize handler with requestAnimationFrame debounce to reduce layout thrashing
    let resizeTimeout: number;
    const handleResize = () => {
      if (resizeTimeout) {
        cancelAnimationFrame(resizeTimeout);
      }
      resizeTimeout = requestAnimationFrame(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Stars data
    const starCount = 60;
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
        radius: Math.random() * 1.0 + 0.2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.01 + 0.003,
      });
    }

    // Gold energy particles (flares)
    const particleCount = 8;
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
        radius: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.3 + 0.1),
        speedX: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.4,
        maxAlpha: Math.random() * 0.3 + 0.15,
        growSpeed: Math.random() * 0.003 + 0.001,
      });
    }

    // Animation Loop
    const render = () => {
      // Pause drawing when tab is inactive to save CPU/GPU cycles
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw and update stars (twinkling)
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
        
        // Use cached background colors
        const colorIndex = Math.max(0, Math.min(100, Math.round(star.opacity * 100)));
        ctx.fillStyle = starColorCache[colorIndex];
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
          p.radius = Math.random() * 2 + 1;
          p.alpha = 0.1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Use cached background colors
        const colorIndex = Math.max(0, Math.min(100, Math.round(p.alpha * 100)));
        ctx.fillStyle = goldColorCache[colorIndex];
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
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
