<template>
    <v-container fluid>
     
  
      <v-app-bar app color="primary">
        <v-app-bar-title>
          NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
  
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Home</v-btn>
        <v-btn @click="navigateTo('/About')">About</v-btn>
        <v-btn @click="navigateTo('/contact')">Contact</v-btn>
        <v-btn @click="navigateTo('/signin')" class="registration-btn">Sign In</v-btn>
      </v-app-bar>
  
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to Naujan Health Care Center! We are dedicated to providing high-quality healthcare services to our community.
          Our team of experienced healthcare professionals is committed to your well-being and ensuring that you receive the best care possible.
        </p>

        

        <v-row>
          <v-col v-for="image in images" :key="image.id" cols="12" md="4">
            <v-img :src="image.src" alt="Healthcare Image"></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <v-footer app color="primary">
        <v-container>
          <span>&copy; 2023 Naujan Health Care Center. All rights reserved.</span>
        </v-container>
      </v-footer>
   
  </template>
  
  <script>
  export default {
    name: 'About',
    data() {
      return {
        images: [
          { id: 1, imageUrl: 'https://via.placeholder.com/600x400' },
          { id: 2, src: 'path/to/image2.jpg' },
          { id: 3, src: 'path/to/image3.jpg' },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
  </script>

  <style scoped>
  .registration-btn {
    border: 1px solid white;
  }
  </style>
  