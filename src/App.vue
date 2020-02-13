<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view/>
  </div>
</template>

<script>
  import  NavBar from './components/layout/Navbar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
