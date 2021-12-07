<template>
<canvas id="canvasTwo"></canvas>
</template>

<script>
export default {
  name: 'ThirdIllustration',
  inject: ['flip'],
  mounted() {
    var canvas = document.getElementById('canvasTwo');
    var ctx = canvas.getContext('2d');

    var squareOne = {
      x: 350,
      y: 100,
      size: 35,
      vx: 2,
      color: '#0fda8f',
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fill();
      }
    };

    var squareTwo = {
      x: 0,
      y: 100,
      size: 35,
      vx: -2,
      color: '#0fda8f',
      draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fill();
      }
    };

    function draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      squareOne.draw();
      squareTwo.draw();
      squareOne.x += squareOne.vx;
      squareOne.vx = squareOne.vx * .996;
      squareTwo.x += squareTwo.vx;
      squareTwo.vx = squareTwo.vx * .996;

      // Handle squareOne colliding with canvas edge
      if (squareOne.x + squareOne.vx > canvas.width ||
        squareOne.x + squareOne.vx < 0 || squareOne.x + squareOne.size >= canvas.width) {
        squareOne.vx = -squareOne.vx;
      }

      // Handle squareTwo colliding with canvas edge
      if (squareTwo.x + squareTwo.vx > canvas.width ||
        squareTwo.x + squareTwo.vx < 0 || squareTwo.x + squareTwo.size >= canvas.width) {
        squareTwo.vx = -squareTwo.vx;
      }

      // Handle squares colliding
      if (squareOne.x <= squareTwo.x + squareTwo.size) {
        squareOne.vx = -squareOne.vx;
        squareTwo.vx = -squareTwo.vx;
      }

      window.requestAnimationFrame(draw);
    }

    window.addEventListener('load', () => {
      window.requestAnimationFrame(draw);
    });

    document.documentElement.addEventListener('flip', () => {
      squareOne.x = 250;
      squareOne.vx = 2;
      squareTwo.x = 2;
      squareTwo.vx = -2;
    });

    squareOne.draw();
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
