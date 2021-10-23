<template>
  <div>
    <Head/>
    <About/>
    <Forma/>
    <WorkExp/>
  </div>
</template>

<script setup>
import Head from './components/Head.vue';
import About from './components/About.vue';
import Forma from './components/Forma.vue';
import WorkExp from './components/WorkExp.vue';
</script>

<style>
* {
  scroll-behavior: smooth;
  overflow: hidden;
  font-family: 'Trebuchet MS', sans-serif;
}

::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #000000;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #000000;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
	-webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
	background-color: rgb(255, 255, 255);
}

.tempo {
  border: 2px solid black;
}
</style>
