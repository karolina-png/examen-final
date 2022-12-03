<template>
  <div id="all">

      <div id="container_login">
          <form id="login">
              
              <div class="input-field login">
                  <label>
                      Email:
                  </label>
                  <input type="email" name="email" v-model="form.email" />
                  
                  <label>Password: </label>
                  <input type="password" name="password" v-model="form.password" />

                 
                
                  
                  <router-link class="ForgotPassword" to="/Forgot-Password">
                      ¿Olvidaste tu contraseña?
                  </router-link>
                  <h1 id="title" style="text-align: center;"> LOGIN </h1>

                  <div id="rutas">

                    <router-link class="nav_item" to="/student"><b>STUDENT</b> </router-link>
                
                  <router-link class="nav_item" to="/teacher"><b>TEACHER</b> </router-link>
                  </div>
                 

              </div>
          </form>

      </div>
  </div>


</template>
<style scoped>
@import url(../assets/login.css);
</style>
<script>
export default {
  data() {
      return {
          form: {
              
          },

      };
  },
  mounted() {
      
  },
  methods: {
      async login() {
          try {

             

          } catch (e) {

          }
      },
  },
}
</script>