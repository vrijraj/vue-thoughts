<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1>Login</h1>
        <div class="form-group">
          <input type="email" v-model="email" class="form-control" placeholder="some@example.com">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" class="form-control" placeholder="password" >
        </div>
        <button v-on:click="login" class="btn btn-primary">Login</button>
        <!-- <button v-on:click="signup" class="btn btn-primary">Sign Up</button> -->
        <router-link class="btn btn-warning ml-2" to="/">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Login',
  components: {
  },
  data:()=>({
    email:'',
    password:''
  }),
  methods:{
    login(){
      if(this.email.length && this.password){
        firebase.auth.signInWithEmailAndPassword(this.email, this.password).then(res=>{
        // console.log(res)
          this.$router.replace('dashboard')
        }).catch(e=>{
          // console.log(e)
          alert('Wrong Username or Password')
        })
      }
      else{
        alert('Aree ree')
      }

    },
    signup(){
      // if(this.email.length && this.password){
      //   console.log(this.email)
      //   console.log(this.password)
      //   firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(res=>{
      //     console.log(res)
      //   }).catch(e=>{
      //     console.log('Ulloouu')
      //   })
      // }else{
      //   alert('Areeee areee')
      // }
    }
  }
}
</script>
