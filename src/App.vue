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
    #app{
        background-color: $bgblue;
    }
</style>
