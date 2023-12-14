<template>
  <v-app class="blue-background">
    <v-row justify="center" align="center" class="my-10">
      <v-col cols="12" sm="10" md="6" class="pr-1">
        <v-card elevation="10" class="pa-4">
          <v-card-title class="text-h5 text-center mb-4">
            Sign In
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="signIn"> <!-- Corrected method name to signIn -->
              <v-text-field v-model="email" label="Email" required outlined dense></v-text-field>
              <v-text-field v-model="password" label="Password" type="password" required outlined dense></v-text-field>
              <v-btn :loading="loading" color="primary" block type="submit">Sign In</v-btn>
              <v-alert v-if="error" type="error" class="mt-2">{{ error }}</v-alert>
            </v-form>
          </v-card-text>
          
          <v-divider></v-divider>
          <v-card-actions class="justify-center">
            <span>Don't have an account?</span>
            <v-btn text color="primary" @click="navigateTo('/Register')">Click here</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="2" md="5" class="pl-2">
        <v-card-title class="text-h3 mb-1" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); font-weight: bold;">
          Welcome To <br>
          <span style="color: #3f51b5;">Naujan Health Care Center</span>
        </v-card-title>
      </v-col>
    </v-row>
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
      loading: false,
      error: null,
    };
  },

  methods: {
    async signIn() { // Corrected method name to signIn
      try {
        this.loading = true;
        const response = await axios.post("api/SignIn", {
          email: this.email,
          password: this.password
        });

        if (response.data.msg === 'user authenticated' || response.data.msg === 'admin authenticated') {
          sessionStorage.setItem("token", response.data.session_token); // Use the correct field
          router.push(response.data.role === 'admin' ? '/adminpanel' : '/residentpanel');
        } else {
          this.error = 'Invalid credentials';
        }
      } catch (error) {
        console.error('An error occurred:', error);
        this.error = 'Invalid credentials';
      } finally {
        this.loading = false;
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
