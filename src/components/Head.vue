<template>
    <div id="header" class="h-v100 w-v100 bg-gray-600">
        <div class="flex flex-row">
            <SideBar/>
            <div class="container">
                <div class="grid grid-cols-2 mt-vh15 ml-p10">
                    <div class="m-auto text-center">
                        <p class="font-black text-white text-4xl uppercase">Bonjour 👋,<br/> Je suis <span class="text-red-400">Prevost Pierre</span>,<br/> etudiant en informatique 💻</p>
                    </div>
                    <div class="m-auto border-2 rounded-full border-white">
                        <img src="../assets/avatar.svg" alt="" width="300">
                    </div>
                </div>
                <div class="flex flex-row justify-around mt-vh15">
                    <a href="https://github.com/prevostpierre" target="_blank" class="p-10">
                        <div class="inline-block mt-rem border rounded border-red-400 bg-red-400 text-white font-bold text-center hover:bg-red-500 w-v10 p-10">
                            <i class="fab fa-github"></i><span class="ml-5">Github</span>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/pierre-prevost-a9b846223/" target="_blank" class="p-10">
                        <div class="inline-block mt-rem border rounded border-red-400 bg-red-400 text-white font-bold text-center hover:bg-red-500 w-v10 p-10">
                            <i class="fab fa-linkedin"></i><span class="ml-5">Linkedin</span>
                        </div>
                    </a>
                    <a href="#" target="_blank" class="p-10">
                        <div class="inline-block mt-rem border rounded border-red-400 bg-red-400 text-white font-bold text-center hover:bg-red-500 w-v10 p-10">
                            <i class="fas fa-download"></i><span class="ml-5">CV</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBar from "./items/SideBar.vue"
</script>

<script>
export default {
        data(){
            return {}
        },
}
</script>

<style scoped>
</style>