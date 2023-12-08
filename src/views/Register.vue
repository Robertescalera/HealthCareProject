<template>
  <v-app class="blue-background">
    <v-row justify="center" class="mt-8">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="5" class="ge" rounded>
          <v-card-title class="text-h5">Registration</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="registerUser">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="userForm.firstName" label="First Name" outlined dense required></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="userForm.lastName" label="Last Name" outlined dense required></v-text-field>
                </v-col>
              </v-row>
              <v-text-field v-model="userForm.email" label="Email" type="email" outlined dense required></v-text-field>
              <v-text-field v-model="userForm.password" label="Password" type="password" outlined dense required></v-text-field>
              <v-btn type="submit" color="primary" block>Register</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <span>Already have an account? </span>
            <v-btn text color="primary" @click="navigateTo('/')">Login here</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Registration',
  data() {
    return {
      userForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    registerUser() {
      // Add form validation logic here before submitting the form
      if (this.validateForm()) {
        console.log('User registered:', this.userForm);
        // Add logic to send the registration data to the server
        axios.post("http://localhost:8080/api/registerUser", this.userForm)
          .then(response => {
            console.log('Registration successful:', response.data);
            // Handle success, e.g., redirect to login page
          })
          .catch(error => {
            console.error('Registration failed:', error.response.data);
            // Handle registration failure, e.g., show an error message to the user
          });
      }
    },
    validateForm() {
      // Add your form validation logic here
      // Return true if the form is valid, false otherwise
      if (!this.userForm.email.includes('@')) {
        // Invalid email format
        console.log('Invalid email format');
        return false;
      }
      return true;
    },
  },
};
</script>


<style scoped>
.ge {
  background-color: rgb(199, 201, 201);
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

.mt-8 {
  margin-top: 2rem;
}
</style>
