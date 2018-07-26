<template>
    <div class="initWrapper">
        <div class="square item"></div>
        <div class="circle item"></div>
        <div class="triangleGroup">
            <div class="triangle t1"></div>
            <div class="triangle t2"></div>
        </div>
        <div class="titleGroup item">
            <div class="inner">
                <h2>GEOMETRY PERSON</h2>
                <P>find your personality type in shapes!</P>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        setTimeout(() => {
            this.$store.commit('changeNowComponent','Q1');
        }, 5800);
    },
}
</script>
<style lang="scss">
    @import '../assets/common';
    $fftransfrom : translateY(-50%) translateX(-50%);
    .initWrapper{
        width: 25vw;
        height: 25vw;
        position: absolute;
        @extend %abcenter;
        animation: fadeOut .8s 5s forwards;
        .item{
            position: absolute;
            @extend %abcenter2;
        }
        .square{
            width: 80%;
            height: 80%;
            background-color: $black;
            animation: rotate2 4s forwards,scalToWindow 1s 4s forwards;
        }
        .circle{
            background-color: $deepBlue;
            width: 100%;
            height: 100%;
            animation: scale 4s forwards,scalToWindow 1s 4.3s forwards;
        }
        .triangleGroup{
            position: absolute;
            width: 100%;
            height: 100%;
            animation: rotate 4s forwards,scalToWindow2 1s 4.5s forwards;
            .triangle{
                @extend %abcenter2;
                position: absolute;
                &.t1{
                    transform: translateY(-60%) translateX(-50%);
                }
                &.t2{
                    transform: translateY(-35%) translateX(-50%) rotate(180deg);
                }
            }
        }
        .titleGroup{
            width: 100%;
            height: 100%;
            color: #fff;
            position: relative;
            .inner{
                position: absolute;
                @extend %abcenter2;
                white-space: nowrap;
                text-align: center;
                h2{
                    font-size: 2.8vw;
                }
                p{
                    font-size: 1vw;
                }
            }
        }
    }
    @keyframes rotate {
        0%{
            transform:  rotate(0deg);
        }
        100%{
            transform:  rotate(360deg);
        }
    }
    @keyframes rotate2 {
        0%{
            transform:  $fftransfrom rotate(0deg);
        }
        100%{
            transform:  $fftransfrom rotate(-360deg);
        }
    }
    @keyframes scale {
        0%{
            transform:  $fftransfrom scale(1);
        }
        20%{
            transform:  $fftransfrom scale(1.1);
        }
        60%{
            transform:  $fftransfrom scale(0.9);
        }
        100%{
            transform:  $fftransfrom scale(1);
        }
    }
    @keyframes scalToWindow {
        0%{
            transform: $fftransfrom scale(1);
        }
        100%{
            transform: $fftransfrom scale(10);
        }
    }
    @keyframes scalToWindow2 {
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(10);
        }
    }
    @keyframes fadeOut {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
</style>
