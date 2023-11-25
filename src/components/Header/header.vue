<template>
    <v-app-bar app color="primary">
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
      <v-btn @click="navigateTo('/About')">About</v-btn>
      <v-btn @click="navigateTo('/contact')">Contact</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  