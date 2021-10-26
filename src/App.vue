<template>
  <div>
    <Head @mouseWheelMove='mouseWheelMove'/>
    <About @mouseWheelMove='mouseWheelMove'/>
    <Forma @mouseWheelMove='mouseWheelMove'/>
    <WorkExp @mouseWheelMove='mouseWheelMove'/>
    <Skills @mouseWheelMove='mouseWheelMove'/>
    <Projects @mouseWheelMove='mouseWheelMove'/>
  </div>
</template>

<script setup>
import Head from './components/Head.vue';
import About from './components/About.vue';
import Forma from './components/Forma.vue';
import WorkExp from './components/WorkExp.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
</script>

<script>
export default {
  data(){
    return {
      divList: ['#header', '#about', '#forma', '#workexp', '#skills'],
      currentDiv: '#header',
      currentIndex: 0
    }
  },
  methods: {
    mouseWheelMove(){
      // if (this.currentIndex > this.divList.length-1) {
      //   this.currentIndex = 0;
      //   document.location.href=document.location.origin+"/"+this.divList[this.currentIndex];
      //   this.currentDiv = this.divList[this.currentIndex];
      //   console.log(document.location.origin, document.location.origin+"/"+this.divList[this.currentIndex++]);
      // } else {
      //   document.location.href=document.location.origin+"/"+this.divList[this.currentIndex];
      //   this.currentDiv = this.divList[this.currentIndex];
      //   console.log(document.location.origin, document.location.origin+"/"+this.divList[this.currentIndex++]);
      // }
    },

    setCurrentDiv(div) {
      this.currentDiv = div;
    }
  }
}
</script>

<style>
* {
  scroll-behavior: smooth;
  overflow: hidden;
  font-family: 'Trebuchet MS', sans-serif;
}

.tempo {
  border: 2px solid black;
}

.contourNoir {
  -webkit-text-stroke: 0.5px;
  -webkit-text-stroke-color: black;
}
</style>
