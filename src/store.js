import {
  createStore
} from 'vuex';
export default createStore({
  state: {
    currentLaw: null,
    laws: [null, {
      text: `An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by another force.`,
      imageSrc: `https://mammothmemory.net/images/user/base/Physics/Newtons%20laws%20of%20motion/Newton's%20first%20law%20-%20Examples/newton's-first-law---examples-example-2---ball-moving.362acc1.gif`
    }, {
      text: `The acceleration and net external force are directly proportional, and there is an inversely proportional relationship between acceleration and mass.`,
      imageSrc: ``
    }, {
      text: `When two bodies interact, they apply forces to one another that are equal in magnitude and opposite in direction.`,
      imageSrc: ''
    }]
  },
  mutations: {
    increment(state, n) {
      state.currentLaw = n;
    }
  }
});