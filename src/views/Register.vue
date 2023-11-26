<template>
  <v-app-bar app color="primary">
    <v-app-bar-title>
      NAUJAN HEALTH CARE CENTER
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn @click="navigateTo('/')">Home</v-btn>
  </v-app-bar>

  <v-container fluid>
    <v-row justify="center" class="mt-8">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="5">
          <v-card-title class="text-h5">User Registration</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="registerUser">
              <v-text-field v-model="userForm.firstName" label="First Name" outlined dense required></v-text-field>
              <v-text-field v-model="userForm.lastName" label="Last Name" outlined dense required></v-text-field>
              <v-text-field v-model="userForm.email" label="Email" type="email" outlined dense required></v-text-field>
              <v-text-field v-model="userForm.password" label="Password" type="password" outlined dense required></v-text-field>
              <v-btn type="submit" color="primary" block>Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
      // Implement user registration logic
      console.log('User registered:', this.userForm);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.mt-8 {
  margin-top: 2rem;
}
</style>
