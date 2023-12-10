<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="login">
      <v-text-field
        v-model="username"
        label="username"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        type="password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import router from '@/router';
import axios from 'axios';

  export default {
    data(){
    return{
        username:"",
        password:"",
        errorMsg:"",
    }
  },
  methods:
  {
    async login()
    {
        const d = await axios.post("api/login", {
            username: this.username,
            password: this.password
        });
        if(d.data.msg === 'okay'){
            sessionStorage.setItem("token", d.data.token);
            router.push('/main');
        };
    }
  }
};
</script>
