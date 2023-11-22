<template>
    <v-container>
      <!-- Navigation Drawer -->
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list dense nav>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
            <v-list-item-icon>{{ item.icon }}</v-list-item-icon>
            <v-list-item-content>{{ item.text }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- App Bar -->
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="header-title">
          NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-card>
        <!-- Header Row -->
        <v-row class="header-row">
          <v-col v-for="header in headers" :key="header.value" class="text-left header-cell">
            {{ header.text }}
          </v-col>
        </v-row>
  
        <!-- Table Content -->
        <v-card-text>
          <v-row v-for="item in records" :key="item.name" class="content-row">
            <v-col v-for="(value, key) in item" :key="key" class="text-left">
              {{ value }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
  
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
    name: 'HealthRecords',
    data() {
      return {
        drawer: false,
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Date of Birth', value: 'dateOfBirth' },
          { text: 'Gender', value: 'gender' },
          { text: 'Contact Number', value: 'contactNumber' },
          { text: 'Emergency Contact Details', value: 'emergencyContactDetails' },
          { text: 'Insurance Information', value: 'insuranceInformation' },
        ],
        records: [
          {
            name: 'John Doe',
            dateOfBirth: '01/01/1980',
            gender: 'Male',
            contactNumber: '123-456-7890',
            emergencyContactDetails: 'Emergency Contact Name: Jane Doe, Phone: 987-654-3210',
            insuranceInformation: 'Insurance Company: ABC Insurance, Policy Number: 123456',
          },
          // Add more entries as needed
        ],
        drawerItems: [
          { text: 'Dashboard', icon: '', route: '/adminpanel' },
          { text: 'Analytics', icon: '', route: '/analytics' },
          { text: 'Census', icon: '', route: '/census' },
          { text: 'Survey', icon: '', route: '/survey' },
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
  /* Add any additional styling as needed */
  .header-row {
    margin-bottom: 20px; /* Adjust the value to control the spacing */
  }
  
  /* Style for the header cells */
  .header-cell {
    font-weight: bold;
  }
  
  /* Style for the table content rows */
  .content-row {
    border-bottom: 1px solid #ccc; /* Add a border between rows for separation */
    padding: 8px 0; /* Adjust the padding as needed */
  }
  
  /* Style for the app bar title */
  .header-title {
    font-weight: bold;
    font-size: 18px; /* Adjust the font size as needed */
  }
  </style>
  