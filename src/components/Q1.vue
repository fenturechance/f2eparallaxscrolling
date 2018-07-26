<template>
    <div class="q1Wrapper">
        <div class="questionWrapper">
            <h2>Q1</h2>
            <h3>If one day you get a gift that can change the rule of the world, which ability will you choose? </h3>
            <h4>Choose the answer appeared in your mind instantly</h4>
            <ul class="answerGroup">
                <li>Destroy all humans in the world</li>
                <li>Make the war never happened</li>
                <li>You won’t get old and live forever</li>
            </ul>
        </div>
        <div class="shapeWrapper">
            <div class="square item"></div>
            <div class="triangle item"></div>
            <div class="circle item"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import '../assets/common';
    .q1Wrapper{
        .questionWrapper{
            animation: fadeIn 1s forwards;
            width: 30vw;
            top: 15%;
            left: 15%;
            position: absolute;
        }
        .shapeWrapper{
            background-color: $deepBlue;
            width: 50vw;
            height: 100vh;
            position: absolute;
            right: -100%;
            top: 0;
            animation: slideIn 1.5s .5s forwards;
            .item{
                position: absolute;
                bottom: -200%;
            }
            .square{
                width: 15vw;
                height: 15vw;
                background-color: $pink;
                left: 8%;
                animation: riseS 1.5s 1.5s forwards;
            }
            .triangle{
                border-bottom-color: $w;
                border-bottom-width: 10vw;
                border-right-width: 6vw;
                border-left-width: 6vw;
                right: -5%;
                animation: riseT 1.5s 1.5s forwards;
            }
            .circle{
                width: 42vw;
                height: 42vw;
                background-color: $black;
                right: -15%;
                animation: riseC 1.5s 1.5s forwards;
            }
        }
    }
    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
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
</style>
