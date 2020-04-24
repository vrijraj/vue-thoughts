<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Dashboard Page</h1>
        {{userData.email}}
        <button v-on:click="logout" class="btn btn-info">Logout</button>
        <router-link class="btn btn-primary ml-2" to="/">Home</router-link>
      </div>
    </div>

    <div class="row mt-5" v-if="loader">
      <div class="col-md-12 text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <div class="row mt-5" v-else>
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <td>MSG</td>
              <td>TimeStamp</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in resData" :key="index">
              <td>{{item.msg}}</td>
              <td>{{item.timestamp.toDate()}}</td>
              <td><button class="btn btn-danger" v-on:click="deleteData(item.id)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Dashboard',
  components: {
  },
  data:()=>({
    resData:[],
    loader:true,
    userData:{}
  }),
  mounted(){
    // this.checkUserState()
    this.showData()
    this.getUserDetails()
  },
  methods:{
    // checkUserState(){
    //   firebase.auth.onAuthStateChanged(user=>{
    //     console.log(user)
    //     if(user){
    //       console.log(user)
    //     }else{
    //       this.$router.replace('login')
    //     }
    //   })
    // },
    logout(){
      firebase.auth.signOut().then(res=>{
        console.log(res)
        this.$router.replace('login')
      }).catch(e=>{
        console.log(e)
      })
    },
    getUserDetails(){
      let user = firebase.auth.currentUser
      if(user){
        this.userData = user
      }
    },
    deleteData(id){
      if(confirm('Pakkaa!')){
        firebase.firestore.collection('msgs').doc(id).delete().then(()=>{
          alert('Removed Successfully')
          this.showData()
        }).catch(e=>{
          console.log(e)
        })
      }
      // console.log(id)
    },
    showData(){
      this.loader = true
      this.resData = []
      firebase.firestore.collection('msgs').get().then(res=>{
        res.forEach(doc=>{
          let obj = doc.data()
          obj['id']=doc.id
          this.resData.push(obj)
        })
        this.loader = false
      }).catch(e=>{
        this.loader = false
        console.log(e)
      })
    }
  }
}
</script>
