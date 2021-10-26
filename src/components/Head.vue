<template>
    <div id="header" class="h-v100 w-v100 bg-gray-600" @mousewheel="this.$emit('mouseWheelMove');">
        <div class="flex flex-row">
            <SideBar/>
            <div class="container">
                <div class="grid grid-cols-2 mt-vh30">
                    <div class="m-auto text-center">
                        <p class="font-black text-white text-4xl uppercase">Bonjour 👋,<br/> Je suis <span class="text-red-400">Prevost Pierre</span>,<br/> etudiant en informatique 💻</p>
                    </div>
                    <div class="m-auto border-2 rounded-full border-white">
                        <img src="../assets/avatar.svg" alt="" width="300">
                    </div>
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
/* .linearBackground {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
}

p {
    animation: color-change 10s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

@keyframes color-change {
    0% {
        color: #e73c7e;
    }
	50% {
		color: #23a6d5;
	}
	100% {
		color: #e73c7e;
	}
} */
</style>