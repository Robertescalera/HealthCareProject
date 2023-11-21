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
        <v-app-bar-title>
          NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-card>
        <v-card-title class="text-h5">Health Records</v-card-title>
        <v-card-text>
          <v-data-table :headers="headers" :items="records" fixed-header height="300px">
            <template v-slot:items="{ item }">
              <td>{{ item.category }}</td>
              <td>{{ item.information }}</td>
            </template>
          </v-data-table>
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
          { text: 'Category', value: 'category', class: 'text-left' },
          { text: 'Information', value: 'information', class: 'text-left' },
        ],
        records: [
          { category: 'Patient Information', information: 'John Doe, 01/01/1980, Male, 123-456-7890, Emergency Contact Name: Jane Doe, Phone: 987-654-3210, Insurance Company: ABC Insurance, Policy Number: 123456' },
          { category: 'Medical History', information: 'Hypertension, Diabetes, Appendectomy' },
          { category: 'Billing and Insurance Information', information: 'Invoice 001, Invoice 002' },
          { category: 'Communication Records', information: 'Emails and messages between healthcare providers and patient.' },
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
  </style>
  