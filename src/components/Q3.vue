<template>
    <div class="q3Wrapper">
        <div class="questionWrapper" :class="{ vanish : vanish }">
            <h2>Q3</h2>
            <h3>When you’re in a exam which you barely prepared for, which is your priority solution?</h3>
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
                'Take a nap right away',
                'Fill the answer randomly',
                'All fill the answer "C"',
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
    .q3Wrapper{
        background-color: $pink;
        height: 100vh;
        .questionWrapper{
            left: 15%;
            h2{
                color: $w;
            }
            h3,h4{
                color: $black;
            }
            ul.answerGroup{
                li{
                    &:hover{
                        color: $pink;
                    }
                }
            }
        }
        .shapeWrapper{
            right: -100%;
            background-color: $bgblue;
            animation: slideIn 1s forwards;
            transition: 1s;
            .square{
                background-color: $deepBlue;
                width: 25vw;
                height: 25vw;
                left: 10%;
                animation: riseS 1.5s 1s forwards,rotateS 40s 2s infinite;
            }
            .triangle{
                border-bottom-color: $black;
                border-bottom-width: 15vw;
                border-right-width: 8vw;
                border-left-width: 8vw;
                right: 5%;
                animation: riseT 1.5s 1s forwards,rotateT 5s 1.5s infinite;
            }
            .circle{
                background-color: $w;
                width: 30vw;
                height: 30vw;
                right: -10%;
                animation: riseC 1.5s 1s forwards,rotateC 5s 2.5s infinite;
            }
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
    @keyframes riseS {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 40%;
        }
    }
    @keyframes riseC {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 80%;
        }
    }
    @keyframes riseT {
        0%{
            bottom: -200%;
        }
        100%{
            bottom: 5%;
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
            right: -10%;
            bottom: 70%;
        }
        50%{
            right: -15%;
            bottom: 65%;
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
