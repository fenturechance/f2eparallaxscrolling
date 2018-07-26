<template>
    <div class="q1Wrapper">
        <div class="questionWrapper" :class="{ vanish : vanish }">
            <h2>Q1</h2>
            <h3>If one day you get a gift that can change the rule of the world, which ability will you choose? </h3>
            <h4>Choose the answer appeared in your mind instantly</h4>
            <ul class="answerGroup">
                <li v-for="ans in answerList" @click="selectAnwser">{{ ans }}</li>
            </ul>
        </div>
        <div class="shapeWrapper" :class="{ slideOut : vanish }">
            <div class="shapGroup" :class="{ vanish : vanish }">
                <div class="square item"></div>
                <div class="triangle item"></div>
                <div class="circle item"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            answerList: [
                'Destroy all humans in the world',
                'Make the war never happened',
                'You won’t get old and live forever',
            ],
            vanish: false
        }
    },
    methods: {
        selectAnwser() {
            this.vanish = true;
            setTimeout(() => {
                this.$store.commit('changeNowComponent','Q2');
            }, 2000);
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/common';
    .q1Wrapper{
        min-height: 100vh;
        .questionWrapper{
            left: 15%;
        }
        .shapeWrapper{
            background-color: $deepBlue;
            animation: slideIn 1.5s .5s forwards;
            right: -100%;
            .square{
                width: 15vw;
                height: 15vw;
                background-color: $pink;
                left: 8%;
                animation: riseS 1.5s 1.5s forwards,rotateS 5s 2s infinite;
            }
            .triangle{
                border-bottom-color: $w;
                border-bottom-width: 10vw;
                border-right-width: 6vw;
                border-left-width: 6vw;
                right: -5%;
                animation: riseT 1.5s 1.5s forwards,rotateT 5s 2s infinite;
            }
            .circle{
                width: 42vw;
                height: 42vw;
                background-color: $black;
                right: -15%;
                animation: riseC 1.5s 1.5s forwards,rotateC 5s 3s infinite;
            }
        }
    }
    @keyframes riseS {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 60%;
        }
    }
    @keyframes riseC {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: -50%;
        }
    }
    @keyframes riseT {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 40%;
        }
    }
    @keyframes rotateS {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @keyframes rotateC {
        0%,100%{
            right: -15%;
            bottom: -50%;
        }
        50%{
            right: -10%;
            bottom: -45%;
        }
    }
    @keyframes rotateT {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(-360deg);
        }
    }
    @keyframes slideIn {
        0%{
            right: -100%;
        }
        100%{
            right: 0;
        }
    }
</style>
