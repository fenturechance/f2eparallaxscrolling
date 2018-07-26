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
            <div class="square"></div>
            <div class="triangle"></div>
            <div class="circle"></div>
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
            right: 0;
            top: 0;
            .square{
                width: 10vw;
                height: 10vw;
                background-color: $pink;
            }
            .triangle{
                border-bottom-color: $w;
                border-bottom-width: 10vw;
                border-right-width: 6vw;
                border-left-width: 6vw;
            }
            .circle{
                width: 10vw;
                height: 10vw;
                background-color: $black;
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
</style>
