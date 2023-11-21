<template>
  <v-container fluid>
    <v-app-bar app color="primary">
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
    </v-app-bar>

    <v-row justify="center" align="center" style="height: 100vh;">
      <v-col cols="12" sm="8" md="6">
        <v-card v-if="signInType === 'user'">
          <v-card-title class="text-h5">User Sign-In</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginUser">
              <v-text-field v-model="userLogin.email" label="Email" type="email" required></v-text-field>
              <v-text-field v-model="userLogin.password" label="Password" type="password" required></v-text-field>
              <v-btn to="/residentpanel" color="primary">Sign In</v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card v-else>
          <v-card-title class="text-h5">Admin Sign-In</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginAdmin">
              <v-text-field v-model="adminLogin.username" label="Username" required></v-text-field>
              <v-text-field v-model="adminLogin.password" label="Password" type="password" required></v-text-field>
              <v-btn to="/adminpanel" color="primary">Sign In</v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-row justify="center">
          <v-btn-toggle v-model="signInType" mandatory>
            <v-btn :value="'user'">User Sign-In</v-btn>
            <v-btn :value="'admin'">Admin Sign-In</v-btn>
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
