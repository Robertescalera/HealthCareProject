<template>
    <v-container>
        <v-app-bar app color="primary">
        <v-btn @click="navigateTo('/')">Home</v-btn>
        <v-btn @click="navigateTo('/about')">About</v-btn>
        <v-btn @click="navigateTo('/contact')">Contact</v-btn>
      </v-app-bar>
    <div>
      <h1>About Us</h1>
      <p>We are passionate about providing great services.</p>
    </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  