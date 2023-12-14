<template>
    <v-container>
      <v-row class="header-row">
        <v-col class="text-right">
          <h1>ANNOUNCEMENTS</h1>
        </v-col>
      </v-row>
  
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Lolo mo User"
            subtitle="LOLOmoUser@gmailcom"
          ></v-list-item>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          WELCOME to NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>

      </v-container>
      <v-app>
  
      <!-- Announcement Table -->
      <v-card>
        <v-card-title>Received Announcements</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="tableHeaders"
            :announcement="announcement"
            :items-per-page="5"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        drawer: false,
        tableHeaders: [
          {value: 'announcement' },
        ],
        announcement: [],
         drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'residentpanel' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'UserSurvey' },
          { title: 'Appointment', icon: 'mdi-access-point', route: 'Appointment' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'UserBarangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'UserAnnouncement' },
        ],
       
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    async fetchandata()
      {
        try 
        {
            const response = await this.$axios.get('api/anData');
            this.items = response.data.data();

        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
      },
    },
    created() 
    {
        this.fetchandata();
    },
  };
  </script>
  
  <style scoped>
  .header-row {
    margin-bottom: 20px;
  }
  </style>
  