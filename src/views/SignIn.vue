<template>
  <v-app class="blue-background">
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

    <!-- The following card title is probably a placeholder; you might want to remove it -->
    <v-card-title class="text-h2 text-right mb-1">
      Sign-In
    </v-card-title>
  </v-app>
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
  try {
    console.log('Logging in with:', this.userLogin);

    const response = await axios.post("http://localhost:8080/api/SignIn", {
      email: this.userLogin.email,
      password: this.userLogin.password
    }, { timeout: 10000 }); // 10 seconds timeout

    console.log('Response from server:', response.data);

    if (response.data.msg === 'okay') {
      console.log('Login successful. Token:', response.data.token);
      sessionStorage.setItem("token", response.data.token);
      // Assuming 'router' is imported and available in this component
      router.push('/residentpanel');
    } else {
      console.log('Login failed. Server response:', response.data);
      // Handle other responses if needed
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle errors, e.g., show an error message to the user
  }
},
navigateTo(route) {
        this.$router.push(route);
        this.drawer = false;
      },
},
};
</script>


<style>
.pa-4 {
  background-color: #c8ccce; /* Blue background */
  color: #ffffff;
  width: 70%;
}
.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

/* Background color styles */
.blue-background {
  background: url('https://media.istockphoto.com/id/1447388979/vector/modern-blue-medical-technology-background-vector-polygon-pattern.jpg?s=612x612&w=0&k=20&c=GsfF2ldGnhFvhcMoRrsSgbhQAy8Bdy9h4QPMSeZFsoo=') center center fixed;
  background-size: 90% 90%;
  height: 100vh;
  width: 210vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Card styles */
.v-card {
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Add more styles as needed */
</style>
