<template>
    <div class="q2Wrapper">
        <div class="questionWrapper" :class="{ vanish : vanish }">
            <h2>Q2</h2>
            <h3>Imagine you’re almost late, but totally lost at a forked road. Which way do you prefer to go?</h3>
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
                'The left one',
                'The right one',
                'Open Google Map',
            ],
            vanish : false
        }
    },
    methods: {
        selectAnwser() {
            this.vanish = true;
            setTimeout(() => {
                this.$store.commit('changeNowComponent','Q3');
            }, 2000);
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/common';
    .q2Wrapper{
        min-height: 100vh;
        background-color: $deepBlue;
        .questionWrapper{
            right: 15%;
            h4{
                color: $bgblue;
            }
        }
        .shapeWrapper{
            background-color:$pink;
            left: -100%;
            animation: slideIn 1.5s .5s forwards;
            .square{
                background-color: $bgblue;
                width: 18vw;
                height: 18vw;
                left: -10%;
                animation: riseS 1.5s 1.5s forwards,rotateS 5s 2s infinite;
            }
            .triangle{
                border-bottom-color: $w;
                border-bottom-width: 18vw;
                border-right-width: 10vw;
                border-left-width: 10vw;
                right: 20%;
                animation: riseT 1.5s 1.5s forwards,rotateT 5s 2s infinite;
            }
            .circle{
                background-color: $black;
                width: 12vw;
                height: 12vw;
                left: 20%;
                animation: riseC 1.5s 1.5s forwards,rotateC 5s 3s infinite;
            }
        }
    }
    @keyframes slideIn {
        0%{
            left: -100%;
        }
        100%{
            left: 0;
        }
    }
    @keyframes riseS {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 20%;
        }
    }
    @keyframes riseC {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 25%;
        }
    }
    @keyframes riseT {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 60%;
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
            left: 20%;
            bottom: 25%;
        }
        40%{
            left: 25%;
            bottom: 30%;
        }
        70%{
            left: 25%;
            bottom: 25%;
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
</style>
