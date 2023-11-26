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
            {{ signInType === 'user' ? 'User Sign-In' : 'Admin Sign-In' }}
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="signInType === 'user' ? loginUser : loginAdmin">
              <v-text-field v-model="userLogin.email" :label="signInType === 'user' ? 'Email' : 'Username'" :type="signInType === 'user' ? 'email' : 'text'" required outlined></v-text-field>
              <v-text-field v-model="userLogin.password" label="Password" type="password" required outlined></v-text-field>
              <v-btn :to="signInType === 'user' ? '/residentpanel' : '/adminpanel'" color="primary" block>Sign In</v-btn>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-center">
            <span>Don't have an account?</span>
            <v-btn text color="primary" @click="navigateTo('/Register')">Click here</v-btn>
          </v-card-actions>
        </v-card>

        <v-row justify="center" class="mt-4">
          <v-btn-toggle v-model="signInType" mandatory>
            <v-btn value="user">User Sign-In</v-btn>
            <v-btn value="admin">Admin Sign-In</v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      signInType: 'user',
      userLogin: {
        email: '',
        password: '',
      },
      adminLogin: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    loginUser() {
      console.log('User logged in:', this.userLogin);
    },
    loginAdmin() {
      console.log('Admin logged in:', this.adminLogin);
    },
  },
};
</script>

<style scoped>
.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
