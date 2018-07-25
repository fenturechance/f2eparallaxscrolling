<template>
    <div class="initWrapper">
        <div class="square"></div>
        <div class="circle"></div>
        <div class="triangle t1"></div>
        <div class="triangle t2"></div>
        <div class="titleGroup">
            <h2>GEOMETRY PERSON</h2>
            <P>find your personality type in shapes!</P>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import '../assets/common';
    .initWrapper{
        width: 300px;
        height: 300px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        .square{
            width: 100%;
            height: 100%;
            background-color: $black;
        }
        .circle{
            background-color: $deepBlue;
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        .triangle{
            width: 0;
            height: 0;
            border-right: 500px solid $pink;
            border-top: 250px solid transparent;
            border-bottom: 250px solid transparent;
        }
    }
</style>
