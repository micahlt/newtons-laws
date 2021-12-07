<template>
<canvas id="canvas"></canvas>
</template>

<script>
export default {
  name: 'FirstIllustration',
  inject: ['flip'],
  mounted() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var raf, bounces = 0;
    var ball = {
      x: 150,
      y: 0,
      vx: .01,
      vy: 2,
      radius: 25,
      color: '#0fda8f',
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };

    function draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      if (bounces > 12) {
        ball.vy *= .75;
        // window.cancelAnimationFrame(raf);
      } else {
        ball.vy *= .99;
        ball.vy += .13;
      }
      ball.x += ball.vx;
      ball.y += ball.vy; // Only line that changes the y-position
      // Handles vertical collisions
      if (ball.y + ball.vy + ball.radius > canvas.height ||
        ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
        bounces++;
      }
      if (ball.x + ball.vx > canvas.width ||
        ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      raf = window.requestAnimationFrame(draw);
    }
    document.documentElement.addEventListener('flip', () => {
      ball.x = 150;
      ball.y = 0;
      ball.vx = .01;
      ball.vy = 2;
      bounces = 0;
      if (!raf) {
        draw();
      }
    });

    ball.draw();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  width: 100%;
  border-radius: 10px;
}
</style>
