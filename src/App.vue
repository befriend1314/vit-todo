<script setup lang="ts">
  import MenuCompVue from './components/MenuComp.vue';
  import MainCompVue from './components/MainComp.vue';
</script>

<template>
  <div>
    <MenuCompVue />
    <MainCompVue />
  </div>
</template>

<style>

@import url('assets/css/common.css');
@import url('assets/css/iconfont.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
