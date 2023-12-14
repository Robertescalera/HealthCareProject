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
                  <v-text-field
                    v-model="userForm.first_name"
                    label="First Name"
                    outlined
                    dense
                    required
                    :error-messages="formErrors.first_name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="userForm.last_name"
                    label="Last Name"
                    outlined
                    dense
                    required
                    :error-messages="formErrors.last_name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-text-field
                v-model="userForm.email"
                label="Email"
                type="email"
                outlined
                dense
                required
                :error-messages="formErrors.email"
              ></v-text-field>
              <v-text-field
                v-model="userForm.password"
                label="Password"
                type="password"
                outlined
                dense
                required
                :error-messages="formErrors.password"
              ></v-text-field>
              <v-btn type="submit" color="primary" block :loading="loading">
                Register
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <span>Already have an account? </span>
            <v-btn text color="primary" @click="navigateTo('/')">Login here</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :color="snackbarColor" multi-line>
      {{ snackbarText }}
      <v-btn text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      userForm: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
      formErrors: {},
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'success',
      loading: false,
    };
  },
  methods: {
    async registerUser() {
      if (this.validateForm()) {
        try {
          this.loading = true;
          const response = await axios.post(
            "/api/registerUser",
            this.userForm,
            { headers: { 'Content-Type': 'application/json' } }
          );

          if (response.data && response.data.msg === 'User registered successfully') {
            this.showSnackbar('User registered successfully', 'success');
          } else {
            console.error('Invalid response format or registration failed:', response);
            this.showSnackbar('Registration failed', 'error');
          }
        } catch (error) {
          console.error('Registration failed:', error.response ? error.response.data : error.message);
          this.showSnackbar('Registration failed', 'error');
        } finally {
          this.loading = false;
        }
      }
    },

    validateForm() {
      this.formErrors = {};

      if (!this.userForm.first_name || !this.userForm.first_name.trim()) {
        this.$set(this.formErrors, 'first_name', 'First Name is required');
      }

      if (!this.userForm.last_name || !this.userForm.last_name.trim()) {
        this.$set(this.formErrors, 'last_name', 'Last Name is required');
      }

      if (!this.userForm.email || !this.userForm.email.trim()) {
        this.$set(this.formErrors, 'email', 'Email is required');
      } else if (!this.isValidEmail(this.userForm.email.trim())) {
        this.$set(this.formErrors, 'email', 'Invalid email format');
      }

      if (!this.userForm.password || !this.userForm.password.trim()) {
        this.$set(this.formErrors, 'password', 'Password is required');
      }

      return Object.keys(this.formErrors).length === 0;
    },

    isValidEmail(email) {
      // Use a regular expression for basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    showSnackbar(text, color) {
      this.snackbarText = text;
      this.snackbarColor = color;
      this.snackbar = true;
    },

    navigateTo(route) {
      this.$router.push(route);
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
