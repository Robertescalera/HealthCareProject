<template>
    <v-container>
        <v-app-bar app color="primary">
      <!-- Left-aligned title -->
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>

      <!-- Right-aligned buttons -->
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
      <v-btn @click="navigateTo('/about')">About</v-btn>
      <v-btn @click="navigateTo('/contact')">Contact</v-btn>
    </v-app-bar>
      </v-container>
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us!</p>
    </div>
  </template>
  
  <script>
 
  </script>
  