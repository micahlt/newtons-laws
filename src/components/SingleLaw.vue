<template>
<div class="law-wrapper" :class="{'active':active}" @click="selectLaw">
  <div class="law">
    <div class="law-front">
      <div class="center">
        <h2>Law</h2>
        <h1>{{ lawNumber }}</h1>
      </div>
    </div>
    <div class="law-back">
      <slot></slot>
      <br>
      {{ law.text }}
    </div>
  </div>
</div>
</template>

<script>
import store from '../store.js';

export default {
  name: 'SingleLaw',
  inject: ['flip'],
  props: {
    lawNumber: null,
  },
  data() {
    return {
      law: store.state.laws[this.lawNumber]
    }
  },
  computed: {
    active() {
      return store.state.currentLaw == this.lawNumber;
    }
  },
  methods: {
    selectLaw() {
      store.commit("increment", this.lawNumber);
      document.documentElement.dispatchEvent(this.flip);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.law-wrapper {
  perspective: 1000px;
  cursor: pointer;
}

.law {
  text-align: center;
  background: white;
  padding: 1em 1em;
  border-radius: 0.4em;
  margin: 0 1em;
  position: relative;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  height: 35vh;
}

.law-wrapper.active .law {
  transform: rotateY(180deg);
  transition-duration: 0.7s;
}

.law-front,
.law-back {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
}

.law-front {
  align-items: center;
  display: grid;
}

.law-front h1 {
  font-size: 4em;
  position: relative;
}

.law-back {
  transform: rotateY(180deg);
  padding: .5em 5%;
  width: 90%;
}

.law-image {
  width: 90%;
}
</style>
