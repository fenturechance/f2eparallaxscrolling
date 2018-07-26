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
            margin: 20px 0;
            color: $deepBlue;
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
            &:hover{
                background-color: $w;
                color: $bgblue;
                cursor: pointer;
            }
        }
    }
</style>
