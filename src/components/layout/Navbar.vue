<template>

  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{name: 'GMap'}">
          <a href="" class="brand-logo left">
            NiMEDix PathFinder</a>
        </router-link>

        <ul class="right">
              <li>
                <router-link :to="{name: 'Signin'}"> <a href="">Signup</a></router-link>
                </li>
              <li>
                <router-link :to="{name: 'login'}"> <a href="">Login</a></router-link>
               </li>
          <li v-if="userIsAuthenticated">
           <a @click.prevent="logout" href="">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

  </div>
    
</template>

<script>
    export default {
        name: "Navbar",
      data() {
          return {

          }
      },

      computed: {
        userIsAuthenticated() {
          let user = this.$store.getters.user
          return user !== null && user !== undefined
        }
      },
      methods: {
          logout() {
            this.$store.dispatch('logout')
            this.$router.push({name: 'login'})
          }
      }

    }
</script>

<style scoped>

</style>
