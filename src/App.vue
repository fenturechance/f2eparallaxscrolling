<template>
  <div id="app">
      <component :is="$store.state.nowComponent"></component>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    @import './assets/common';
    *{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        list-style: none;
    }
    #app{
        background-color: $bgblue;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
    }
    @keyframes vanish {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
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
    .vanish{
        animation: vanish .2s forwards;
    }
    .circle{
        border-radius: 50%;
    }
    .triangle{
        width: 0;
        height: 0;
        border-bottom: 20vw solid $pink;
        border-right: 11vw solid transparent;
        border-left: 11vw solid transparent;
    }
    .questionWrapper{
        width: 30vw;
        top: 15%;
        position: absolute;
        animation: fadeIn 1s forwards;
        h2{
            font-size: 4vw;
            color: $pink;
            margin: 0 0 10px 0;
        }
        h3{
            font-size: 2vw;
            color: $w;
        }
        h4{
            font-weight: normal;
            font-size: 1.3vw;
            margin: 30px 0;
            color: $deepBlue;
        }
    }
    .shapeWrapper{
        width: 50vw;
        height: 100vh;
        position: absolute;
        top: 0;
        transition: .5s;
        &.slideOut{
            width: 100vw;
        }
        .item{
            position: absolute;
            bottom: -200%;
        }
    }
    ul.answerGroup{
        width: 90%;
        li{
            padding: 20px 30px;
            border-radius: 50px;
            border: 1px solid $w;
            margin: 20px 0;
            font-size: 20px;
            color: $w;
            text-align: center;
            &:hover{
                background-color: $w;
                color: $bgblue;
                cursor: pointer;
            }
        }
    }
</style>
