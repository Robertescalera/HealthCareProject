<template>
    <v-container fluid>
      <!-- Registration and Sign In Buttons -->
      <v-row class="registration-row" justify="end">
        <v-btn @click="navigateTo('/register')">Register</v-btn>
        <v-btn @click="navigateTo('/signin')">Sign In</v-btn>
      </v-row>
  
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
  
      <v-main>
        <!-- Background Image -->
        <v-sheet class="background-sheet" height="600">
          <!-- Tiles Section -->
          <v-container>
            <v-row>
              <v-col v-for="tile in tiles" :key="tile.id" cols="12" md="4">
                <v-sheet class="tile-sheet">
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
            title: 'Tile 1',
            description: 'Description for Tile 1',
            imageUrl: 'https://via.placeholder.com/600x400',
          },
          {
            id: 2,
            title: 'Tile 2',
            description: 'Description for Tile 2',
            imageUrl: 'https://via.placeholder.com/600x400',
          },
          {
            id: 3,
            title: 'Tile 3',
            description: 'Description for Tile 3',
            imageUrl: 'https://via.placeholder.com/600x400',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .background-sheet {
    background-image: url('https://via.placeholder.com/1920x1080');
    background-size: cover;
  }
  
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
  
  .registration-row {
    padding: 8px;
  }
  </style>
  