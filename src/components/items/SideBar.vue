<template>
    <div class="h-v100 flex bg-black fixed">
        <div class="m-auto">
            <nav>
                <ul>
                    <a href="#header" @click="setActivePart('headerLink')"><li id="headerLink" class="hover:bg-gray-500 rounded p-rem2 active"><i class="fas fa-home text-2xl text-white"></i></li></a>
                    <a href="#about" @click="setActivePart('aboutLink')"><li id="aboutLink" class="mt-rem2 hover:bg-gray-500 rounded p-rem2"><i class="fas fa-user-circle text-2xl text-white"></i></li></a>
                    <a href="#forma" @click="setActivePart('formaLink')"><li id="formaLink" class="mt-rem2 hover:bg-gray-500 rounded p-rem2"><i class="fas fa-graduation-cap text-2xl text-white"></i></li></a>
                    <a href="#workexp" @click="setActivePart('workexpLink')"><li id="workexpLink" class="mt-rem2 hover:bg-gray-500 rounded p-rem2"><i class="fas fa-suitcase text-2xl text-white"></i></li></a>
                    <a href="#skills" @click="setActivePart('skillsLink')"><li id="skillsLink" class="mt-rem2 hover:bg-gray-500 rounded p-rem2"><i class="fas fa-code-branch text-2xl text-white"></i></li></a>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activePart: "headerLink"
        }
    },
    methods: {
        setActivePart(part) {
            const currentPart = this.activePart;
            document.getElementById(currentPart).classList.remove("active");
            document.getElementById(part).classList.add("active");
            this.activePart = part;
        }
    },
}
</script>

<style scoped>
.active {
    background-color: rgb(107, 114, 128);
}
</style>