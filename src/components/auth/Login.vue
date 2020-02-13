<template>

  <div class="signup container">

    <form @submit.prevent="signin" class="card-panel" @click="clearError">
      <h2 class="center deep-purple-text">Signup </h2>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email">
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input type="password" id="password"  v-model="password">
      </div>

      <div class="field center">

        <p class="center red-text" v-if="error">{{error.message}}</p>
        <p class="center red-text" v-if="loading">loading...</p>
        <button class="btn deep-purple" type="submit">Login</button>
      </div>

    </form>
  </div>
    
</template>

<script>
    export default {
        name: "Login",
      data() {
          return {
            email: null,
            password: null,
            feedback: null
          }
      },

      computed: {

        user() {
          return this.$store.getters.user
        },

        error() {
          return this.$store.getters.error
        },

        loading() {
          return this.$store.getters.loading
        }

      },

   methods: {

     signin() {
       if(  !this.email && !this.password) {
         return
       }
       this.$store.dispatch('signUserIn', {email: this.email, password: this.password})


     },
     clearError() {
       this.feedback = null
     }

   },
      watch: {
        user(value) {
          if (value !== null && value !== undefined) {
            this.$router.push({name: 'GMap'})
          }
        }
      }
    }
</script>

<style scoped>

  .signup {
    max-width: 400px;
    margin-top: 60px;
  }

  .signup h2 {
    font-size: 2.4em;
  }
  .signup .field{
    margin-bottom: 16px;
  }

</style>
