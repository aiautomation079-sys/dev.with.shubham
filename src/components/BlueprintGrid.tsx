import { useEffect, useRef } from 'react';

export function BlueprintGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 5;
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 40;
      const majorGridSize = 200;

      // Minor grid
      ctx.strokeStyle = 'rgba(30, 42, 58, 0.3)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();

      for (let x = (offset % gridSize); x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = (offset % gridSize); y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Major grid
      ctx.strokeStyle = 'rgba(30, 42, 58, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let x = (offset % majorGridSize); x < canvas.width; x += majorGridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = (offset % majorGridSize); y < canvas.height; y += majorGridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Grid coordinates
      ctx.fillStyle = 'rgba(71, 85, 105, 0.4)';
      ctx.font = '9px JetBrains Mono, monospace';
      for (let x = (offset % majorGridSize); x < canvas.width; x += majorGridSize) {
        for (let y = (offset % majorGridSize); y < canvas.height; y += majorGridSize) {
          const coordX = Math.round((x - offset) / gridSize);
          const coordY = Math.round((y - offset) / gridSize);
          ctx.fillText(`${coordX},${coordY}`, x + 3, y + 12);
        }
      }

      // Cross markers at major intersections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.lineWidth = 1;
      for (let x = (offset % majorGridSize); x < canvas.width; x += majorGridSize) {
        for (let y = (offset % majorGridSize); y < canvas.height; y += majorGridSize) {
          ctx.beginPath();
          ctx.moveTo(x - 4, y);
          ctx.lineTo(x + 4, y);
          ctx.moveTo(x, y - 4);
          ctx.lineTo(x, y + 4);
          ctx.stroke();
        }
      }

      offset += 0.05;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
