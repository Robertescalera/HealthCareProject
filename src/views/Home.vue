<template>
    <v-container fluid>
      <!-- Registration and Sign In Buttons -->
      <v-row class="registration-row" justify="end">
        <v-btn @click="navigateTo('/register')" class="registration-btn">Register</v-btn>
        <v-btn @click="navigateTo('/signin')" class="registration-btn">Sign In</v-btn>
      </v-row>
  
      <v-app-bar app color="primary">
        <!-- Left-aligned title -->
        <v-app-bar-title>
          NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
  
        <!-- Right-aligned buttons -->
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Home</v-btn>
        <v-btn @click="navigateTo('/About')">About</v-btn>
        <v-btn @click="navigateTo('/contact')">Contact</v-btn>
      </v-app-bar>
  
      <v-main>
        <!-- Background Image -->
        <v-sheet class="background-sheet" height="600">
          <!-- Tiles Section -->
          <v-container>
            <v-row>
              <v-col v-for="tile in tiles" :key="tile.id" cols="12" md="4">
                <v-sheet class="tile-sheet" @click="navigateTo(tile.route)">
                  <!-- Tile Content -->
                  <v-img :src="tile.imageUrl" height="200">
                    <!-- Content within the tile -->
                    <v-row class="fill-height">
                      <v-col class="text-center white--text">
                        <h3>{{ tile.title }}</h3>
                        <p>{{ tile.description }}</p>
                      </v-col>
                    </v-row>
                  </v-img>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
  
          <!-- Additional Information Section -->
          <v-container class="info-container">
            <h2>Welcome to Naujan Health Care Center</h2>
            <p>Providing Quality Health Care Services for Your Well-being</p>
            <p>Our dedicated team of healthcare professionals is committed to ensuring the best possible care for you and your loved ones.</p>
            <p>Explore our services and facilities to discover how we prioritize your health and wellness.</p>
            <!-- Static Map -->
            <img src="https://via.placeholder.com/800x400" alt="Static Map">
          </v-container>
        </v-sheet>
      </v-main>
  
      <!-- Footer -->
      <v-footer app color="primary">
        <v-container>
          <span>&copy; 2023 Naujan Health Care Center. All rights reserved.</span>
        </v-container>
      </v-footer>
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
    data() {
      return {
        tiles: [
          {
            id: 1,
            title: 'Health Services',
            description: 'Explore our comprehensive health services designed to meet your unique needs.',
            imageUrl: 'https://via.placeholder.com/600x400',
            route: '/health-services',
          },
          {
            id: 2,
            title: 'Wellness Programs',
            description: 'Participate in our wellness programs focused on preventive care and healthy living.',
            imageUrl: 'https://via.placeholder.com/600x400',
            route: '/wellness-programs',
          },
          {
            id: 3,
            title: 'Appointment Booking',
            description: 'Effortlessly schedule appointments with our experienced healthcare professionals.',
            imageUrl: 'https://via.placeholder.com/600x400',
            route: '/appointment-booking',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Background Image Styles */
  .background-sheet {
    background-image: url('https://via.placeholder.com/1920x1080');
    background-size: cover;
    background-position: center;
  }
  
  /* Tile Section Styles */
  .tile-sheet {
    margin: 16px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .tile-sheet:hover {
    transform: scale(1.05);
  }
  
  /* Additional Information Section Styles */
  .info-container {
    text-align: center;
    color: white;
    margin-top: 50px;
  }
  
  /* Registration Buttons Styles */
  .registration-row {
    padding: 8px;
    position: absolute;
    top: 0;
    right: 0;
  }
  
  .registration-btn {
    margin-left: 8px;
  }
  </style>
  