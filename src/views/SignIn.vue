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
            <v-form @submit.prevent="login">
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
import router from '@/router'; // Assuming your router setup is in the specified location

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
    async login() {
      const d = await axios.post("api/SignIn", {
        email: this.userLogin.email,
        password: this.userLogin.password
      });
      if (d.data.msg === 'okay') {
        sessionStorage.setItem("token", d.data.token);
        // Assuming 'router' is imported and available in this component
        router.push('/residentpanel');
      }
    },
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    }
  }
};
</script>

<style>
.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
/* Your additional styles go here */
</style>
