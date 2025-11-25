export const renderCanvas = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const dots: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
  }> = [];

  const numDots = 50;

  // Initialize dots
  for (let i = 0; i < numDots; i++) {
    dots.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    });
  }

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    // Update and draw dots
    dots.forEach((dot, i) => {
      // Update position
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Bounce off edges
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;

      // Draw dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 69, 0, 0.3)';
      ctx.fill();

      // Connect nearby dots
      dots.slice(i + 1).forEach((dot2) => {
        const dx = dot.x - dot2.x;
        const dy = dot.y - dot2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(dot2.x, dot2.y);
          ctx.strokeStyle = `rgba(255, 69, 0, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
};
