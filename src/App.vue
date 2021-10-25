<template>
  <div>
    <Head/>
    <About/>
    <Forma/>
    <WorkExp/>
    <Skills/>
  </div>
</template>

<script setup>
import Head from './components/Head.vue';
import About from './components/About.vue';
import Forma from './components/Forma.vue';
import WorkExp from './components/WorkExp.vue';
import Skills from './components/Skills.vue';
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
</style>
