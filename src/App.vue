<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Default msg="Welcome"/>
    
      </div>
      
</template>

<script>
import Default from './layouts/Default.vue';



export default {
  name: 'app',
  components: {
    Default
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
