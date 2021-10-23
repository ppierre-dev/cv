<template>
    <div id="forma" class="h-v100 w-v100 bg-gray-600">
        <div class="container">
            <div class="m-auto w-p50 mt-vh15">
                <div>
                    <p class="text-right text-4xl text-red-400 font-black p-rem2 uppercase">formation scolaire</p>
                </div>
                <ul class="">
                    <li v-for="forma, key in formaList" :key="key" style="list-style-type: none;">
                        <div class="flex flex-row m-auto">
                            <div class="inline-block p-rem2 border-2 rounded-full rounded-white bg-red-400">
                                <i class="fas fa-graduation-cap text-4xl text-white"></i>
                            </div>
                            <div class="forma-content">
                            </div>
                            <div class="flex bg-red-400 text-white w-p50 text-center border-2 border-white rounded" style="margin-left: -10px">
                                <p class="text-xl font-black uppercase m-auto">{{forma.label}}<br/><span class="text-sm font-bold">{{forma.secondLabel}}</span><br/><span class="text-xs font-bold">{{forma.year}}</span></p>
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
                formaList: [
                    {year: "2019", label: "Baccaulauréat Scientifique", secondLabel: "Option ISN"},
                    {year: "2022", label: "DUT Informatique", secondLabel: "En 2ème année actuellement"}
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