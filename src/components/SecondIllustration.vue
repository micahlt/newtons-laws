<template>
<div>
  <svg id="svg" height="100" width="1000" stroke="#0fda8f" stroke-width="2" class="text-line">
    <text id="text" x="50%" y="50%" fill="none" font-size="40" dominant-baseline="middle" text-anchor="middle">∑F = ma</text>
  </svg>
</div>
</template>

<script>
export default {
  name: 'SecondIllustration',
  inject: ['flip'],
  mounted() {
    document.documentElement.addEventListener('flip', () => {
      document.getElementById("svg").classList.remove('text-line');
      window.setTimeout(() => {
        document.getElementById("svg").classList.add('text-line');
      }, 100);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #0fda8f;
}

svg {
  width: 100%;
}

.text-line text {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: dash 2s linear forwards, filling 1s ease-in forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes filling {
  from {
    fill: #0fda8f;
    fill-opacity: 0;
  }

  to {
    fill: #0fda8f;
    fill-opacity: 1;
  }
}

#text {
  font-family: 'Yeseva One', serif;
}
</style>
