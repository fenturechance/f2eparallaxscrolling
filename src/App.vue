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
    }
    #app{
        background-color: $bgblue;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
    }
</style>
