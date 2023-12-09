<template>
  <v-app class="blue-background">
    <v-row justify="center" align="center" class="my-12">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="5" class="pa-4">
          <v-card-title class="text-h5 text-center mb-4">
            Sign-In
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="SignIn">
              <v-text-field v-model="email" label="Email" type="email" required outlined></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required outlined></v-text-field>
              <v-btn color="primary" block type="submit">Sign In</v-btn>
            </v-form>
          </v-card-text>
          
          <v-divider></v-divider>
          <v-card-actions class="justify-center">
            <span>Don't have an account?</span>
            <v-btn text color="primary" @click="navigateTo('/Register')">Click here</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-card-title class="text-h2 text-right mb-1">
      Sign-In
    </v-card-title>
  </v-app>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'SignIn',

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async SignIn() {
      const d = await axios.post("api/login", {
        email: this.email,
        password: this.password
      });
      if (d.data.msg === 'okay') {
        sessionStorage.setItem("token", d.data.token);
        router.push('/residentpanel');
      }
    },
    
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.pa-4 {
  background-color: #c8ccce;
  color: #ffffff;
  width: 70%;
}
.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.blue-background {
  background: url('https://media.istockphoto.com/id/1447388979/vector/modern-blue-medical-technology-background-vector-polygon-pattern.jpg?s=612x612&w=0&k=20&c=GsfF2ldGnhFvhcMoRrsSgbhQAy8Bdy9h4QPMSeZFsoo=') center center fixed;
  background-size: 90% 90%;
  height: 100vh;
  width: 210vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
