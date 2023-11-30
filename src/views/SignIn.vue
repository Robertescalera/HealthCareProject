<template>
  <v-container fluid>
    <v-app-bar app color="primary">
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
    </v-app-bar>

    <v-row justify="center" align="center" class="my-12">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="5" class="pa-4">
          <v-card-title class="text-h5 text-center mb-4">
            Sign-In
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginUser">
              <v-text-field v-model="userLogin.email" label="Email" type="email" required outlined></v-text-field>
              <v-text-field v-model="userLogin.password" label="Password" type="password" required outlined></v-text-field>
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
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignIn',
  data() {
    return {
      userLogin: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:8080/signIn', this.userLogin);
        // Handle successful sign-in response, e.g., store user data, navigate to home, etc.
        console.log('User signed in:', response.data);
      } catch (error) {
        // Handle sign-in error, e.g., show error message
        console.error('Sign-in failed:', error.response.data.message);
      }
    },
  },
};
</script>

<style>
.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
