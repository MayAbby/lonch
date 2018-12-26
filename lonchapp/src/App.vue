<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
  <div>
    <span>测试添加后Git提交前</span>  
  </div>
</template>

<script>
export default {
  name: 'App'
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
