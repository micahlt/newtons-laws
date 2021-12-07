<template>
<canvas id="backgroundCanvas"></canvas>
<main>
  <TitleBlock />
  <div class="laws">
    <SingleLaw lawNumber="1">
      <FirstIllustration />
    </SingleLaw>
    <SingleLaw lawNumber="2">
      <SecondIllustration />
    </SingleLaw>
    <SingleLaw lawNumber="3">
      <ThirdIllustration />
    </SingleLaw>
  </div>
</main>
</template>

<script>
import TitleBlock from './components/TitleBlock.vue';
import SingleLaw from './components/SingleLaw.vue';
import FirstIllustration from './components/FirstIllustration.vue';
import SecondIllustration from './components/SecondIllustration.vue';
import ThirdIllustration from './components/ThirdIllustration.vue';
var Starfield = require('canvas-starfield');

export default {
  name: 'App',
  components: {
    TitleBlock,
    SingleLaw,
    FirstIllustration,
    SecondIllustration,
    ThirdIllustration
  },
  mounted() {
    var sf = new Starfield({
      canvas: '#backgroundCanvas', // string selector or HTML element
      maxStars: 800, // default 500
      vx: 0.1, // x speed of stars in px/frame, default 0.05
      vy: 0.1, // y speed of stars in px/frame, default 0.05
      maxRadius: 2, // maximum star radius in px
      shootingStarInterval: 2 // time in seconds between shooting stars (omit field to disable shooting stars)
    });
    sf.start();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Shippori Antique', sans-serif;
}

#backgroundCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.2);
  z-index: -1;
}

main {
  display: block;
}

#app {
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
}

.laws {
  margin: 2em auto auto auto;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
