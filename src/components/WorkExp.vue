<template>
    <div id="workexp" class="h-v100 w-v100 bg-gray-600">
        <div class="container">
            <div class="m-auto w-p50 mt-vh15">
                <div>
                    <p class="text-right text-4xl text-red-400 font-black p-rem2 uppercase">experiences professionnelles</p>
                </div>
                <ul class="">
                    <li v-for="exp, key in workExpList" :key="key" style="list-style-type: none;">
                        <div class="flex flex-row m-auto">
                            <div class="inline-block p-rem2 border-2 rounded-full rounded-white bg-red-400">
                                <i class="fas fa-suitcase text-4xl text-white"></i>
                            </div>
                            <div class="forma-content">
                            </div>
                            <div class="flex bg-red-400 text-white w-p50 text-center border-2 border-white rounded" style="margin-left: -10px">
                                <p class="text-lg font-black uppercase m-auto">{{exp.label}}<br/><span class="text-sm font-bold">{{exp.secondLabel}}</span><br/><span class="text-xs font-bold">{{exp.year}}</span></p>
                            </div>
                        </div>
                        <div class="forma-line">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                workExpList: [
                    {year: "2015 (1 semaine)", label: "Stage D'observation", secondLabel: "Applicook (Développement Web) - Calais"},
                    {year: "2020 (2 semaines)", label: "Service Nettoyage", secondLabel: "Nord Cereales - Port de Dunkerque"},
                    {year: "2021 (3 semaines)", label: "Coursier Sanguin", secondLabel: "Synlab - Calais"},
                ]
            }
        }
    }
</script>

<style scoped>
.forma-content {
    background: rgb(248, 113, 113);
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    margin-left: 2rem;
    width: 20px;
    height: 20px;
    margin-top: 2rem;
    transform: rotate(45deg);
    border-radius: 0 0 0 2px;
}

.forma-line {
    height: 10vh;
    margin-left: 3.5rem;
    border-left: 2px solid white;
}

li:last-child .forma-line {
    display: none;
}
</style>