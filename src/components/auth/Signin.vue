<template>
    <div class="signup container">

      <form @submit.prevent="signup" class="card-panel">
        <h2 class="center deep-purple-text">Signup </h2>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </div>

        <div class="field">
        <label for="password">Password</label>
        <input type="password" id="password"  v-model="password">
        </div>

        <div class="field">
        <label for="alias">Alias</label>
        <input type="text" id="alias" v-model="alias" >
        </div>
        <div class="field center">
          <p class="center red-text" v-if="feedback">{{feedback}}</p>
           <button class="btn deep-purple" type="submit">Signup</button>
        </div>

      </form>
    </div>
</template>

<script>
  import slugify from  'slugify'
  import * as fb from "firebase";
    export default {
        name: "Signin",
      data() {
        {
         return {
           email: null,
           password: null,
           alias: null,
           feedback: null,
           slug: null
         }
        }

      },



      methods: {
        signup() {
          if(!this.feedback && !this.email && !this.password) {
            this.feedback = 'You must fill all form field'
            return
          }
          this.slug = slugify(this.alias, {
            replacement: '-',
            remove:  /[$*_~.()'"!\/\/-:@?]/g,
            lower: true
          })


          let ref = fb.firestore().collection('users').doc(this.slug)
            ref.get()
              .then(doc => {
                if(doc.exists) {
                  this.feedback = "This alias exist"
                }else {
                  fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((cred) => {
                        ref.set({
                          alias: this.alias,
                          geolocation: null,
                          user_id: cred.user.uid

                        })
                          .then(() => {
                            this.$router.push({name: 'GMap'})
                          })
                    })
                    .catch((error) => {

                      this.feedback = error.message
                    })
                }

              })
        }
      },

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
