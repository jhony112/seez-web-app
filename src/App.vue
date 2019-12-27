<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../src/assets/css/util.css';
  @import '../src/assets/css/hover.css';
  @import '../src/assets/css/slick-theme.css';
  @import '../src/assets/fonts/fonts.css';
  @import '../src/assets/css/style.css';


#app {
  font-family: 'proxima_nova', sans-serif;
    /*font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";*/

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background: #ebebeb!important;
}
#nav {
  padding: 30px;

  a {
    font-weight: 700;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
