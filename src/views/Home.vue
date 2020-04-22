<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <hr>
        <h1>Aapka Vichar</h1>
        <hr>
        <div class="form-group">
          <textarea class="form-control" v-model="msg" rows="3"></textarea>
        </div>
        <button v-if="loading == false" v-on:click="addData" class="btn btn-primary">Submit</button>
        <div v-else class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/config/firebase'
export default {
  name: 'Home',
  components: {
  },
  data:()=>({
    msg:'',
    loading: false
  }),
  methods:{
    addData(){
      this.loading = true
      if(this.msg.length>0){
        let datatoadd = {
          msg: this.msg,
          timestamp: new Date()
        }
        firebase.firestore.collection('msgs').add(datatoadd).then(res=>{
          console.log(res)
          this.loading = false
          alert('Vichar hamare pass aa gaya hai')
          this.msg = ''
        }).catch(e=>{
          this.loading = false
          console.log(e)
        })
      }else{
        alert('Kuch to enter karo')
      }
    }
  }
}
</script>
