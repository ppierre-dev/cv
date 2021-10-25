<template>
    <div id="about" class="h-v100 w-v100 bg-gray-600">
        <div class="flex flex-row">
            <div class="container">
                <div class="m-auto mt-vh5 w-p50 rounded p-rem">
                    <p class="text-right text-4xl text-red-400 font-black p-rem2 uppercase">A propos</p>
                    <p class="text-center title font-bold text-red-400 p-rem text-2xl">Qui suis-je ?</p>
                    <p class="text-white text-center">Je suis un jeune passionné de développement informatique, j'ai <span class="text-red-400 font-bold">20ans</span> et je suis actuellement en <span class="text-red-400 font-bold">2ème année de DUT informatique.</span><br/>Je m'intéresse beaucoup au <span class="text-red-400 font-bold">développement web</span>, j'apprends beaucoup par moi-même et ca me passionne.<br/>Je préfère d'avantage le développement <span class="text-red-400 font-bold">backend</span>, et aimerai en faire mon métier c'est pour cette raison que je vise à intégrer une <span class="text-red-400 font-bold">LP DIM.</span><br/>J'aime également le domaine de la <span class="text-red-400 font-bold">cybersécurité.</span></p>
                    <p class="text-center title font-bold text-red-400 p-rem text-2xl">Mes centres d'intérêts</p>
                    <div class="flex flex-row justify-around">
                        <div class="flex flex-col">
                            <i class="fas fa-dumbbell m-auto text-4xl text-white"></i>
                            <span class="capitalize text-white">musculation</span>
                        </div>
                        <div class="flex flex-col">
                            <i class="fas fa-gamepad m-auto text-4xl text-white"></i>
                            <span class="capitalize text-white">jeux vidéos</span>
                        </div>
                        <div class="flex flex-col">
                            <i class="fas fa-code m-auto text-4xl text-white"></i>
                            <span class="capitalize text-white">Programmation</span>
                        </div>
                        <div class="flex flex-col">
                            <i class="fas fa-glass-cheers m-auto text-4xl text-white"></i>
                            <span class="capitalize text-white">s'amuser</span>
                        </div>
                    </div>
                    <p class="text-center title font-bold text-red-400 p-rem text-2xl">Autres</p>
                    <div class="flex flex-row justify-around">
                        <div class="flex flex-col">
                            <i class="fas fa-car m-auto text-4xl text-white"></i>
                            <span class="capitalize text-white">Permis B (véhicule)</span>
                        </div>
                    </div>
                    <p class="text-center title font-bold text-red-400 p-rem text-2xl">Langues parlées</p>
                    <div class="flex flex-row justify-around">
                        <div class="flex flex-col">
                            <p class="m-auto text-4xl text-white">🇫🇷</p>
                            <span class="capitalize text-white">Français (Maternelle)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.title::before {
    content: "";
    width: 10%;
    height: 1px;
    display: inline-block;
    background: rgb(248, 113, 113);
    vertical-align: middle;
    margin-right: 1em;
}

.title::after {
    content: "";
    width: 10%;
    height: 1px;
    display: inline-block;
    background: rgb(248, 113, 113);
    vertical-align: middle;
    margin-left: 1em;
}
</style>