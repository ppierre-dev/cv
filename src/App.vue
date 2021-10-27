<template>
  <div>
    <Head/>
    <About/>
    <Forma/>
    <WorkExp/>
    <Skills/>
    <Projects/>
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
}
</script>

<style>
* {
  scroll-behavior: smooth;
  overflow: hidden;
  font-family: 'Trebuchet MS', sans-serif;
}
</style>
