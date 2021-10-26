<template>
    <div id="projects" class="h-v100 w-v100 bg-gray-600" @mousewheel="this.$emit('mouseWheelMove');">
        <div class="container">
            <div class="flex flex-col">
                <div class="m-auto">
                    <p class="text-center text-4xl text-red-400 font-black p-rem2 uppercase">Projets Réalisés</p>
                </div>
                <div class="flex grid grid-cols-2 m-rem2 text-center">
                    <li style="list-style-type: none;" v-for="project, key in projects" :key="key">
                        <div class="bg-cover bg-no-repeat bg-center m-rem h-v25 border-4 border-red-400 rounded" :style="project.background" @mouseover="project.hover = true" @mouseleave="project.hover = false">
                            <div v-if="project.hover" class="w-pfull h-pfull backdrop-filter backdrop-blur-3xl overflow-y-auto p-rem05">
                                <p class="text-center text-xl text-white font-black mt-rem05 uppercase">{{project.name}}</p>
                                <p class="text-center text-sm text-white font-black">{{project.language}}</p>
                                <p class="text-center text-sm text-white font-black mt-rem05">{{project.desc}}</p>
                                <div class="inline-block mt-rem border rounded border-red-400 bg-red-400 text-white font-bold text-center hover:bg-red-500">
                                    <a :href="project.link" class="p-5"><i class="fas fa-external-link-alt"></i><span class="ml-5">Code source</span></a>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data(){
            return {
                projects: [
                    {name: 'Projet Pente', language: 'Java', desc: 'Projet réalisé en groupe de 5 à 8, utilisation de la méthode agile, de github et trello.', background: "background-image: url('src/assets/jeu_pente.png');", link: '#', hover: false},
                    {name: 'Déformation Image', language: 'Python', desc: 'Projet réalisé en groupe de 3, utilisation de github.', background: "background-image: url('src/assets/deformation_img.png');", link: '#', hover: false},
                    {name: 'E_CV', language: 'VueJS, Tailwind', desc: 'Première ébauche réalisée pour ma recherche de stage/alternance. Amélioration à venir', background: "background-image: url('src/assets/e_cv.png');", link: '#', hover: false},
                ],
            }
        },
}
</script>

<style scoped>

</style>