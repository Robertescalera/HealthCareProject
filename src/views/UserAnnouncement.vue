<template>
    <v-container>
      <v-row class="header-row">
        <v-col class="text-right">
          <h1>ANNOUNCEMENT</h1>
        </v-col>
      </v-row>
  
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Lolo mo Admin"
            subtitle="LOLOmoADMIN@gmailcom"
          ></v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          ADMIN NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
  
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="announcement.title" label="Title"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="announcement.description" label="Description"></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-file-input label="Attachment" v-model="announcement.attachment" show-size accept=".pdf, .doc, .docx"></v-file-input>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" type="submit">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
  
      <!-- Announcement Table -->
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Title</th>
                  <th class="text-left">Description</th>
                  <th class="text-left">Attachment</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(announcement, index) in announcements" :key="index">
                  <td>{{ announcement.title }}</td>
                  <td>{{ announcement.description }}</td>
                  <td>
                    <a :href="announcement.attachment" target="_blank" v-if="announcement.attachment">
                      View Attachment
                    </a>
                    <span v-else>N/A</span>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false,
        announcement: {
          title: '',
          description: '',
          attachment: null,
        },
        announcements: [], // Array to store multiple announcements
        drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'residentpanel' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'UserSurvey' },
        { title: 'Appointment', icon: 'mdi-access-point', route: 'Appointment' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'UserInventory' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'UserBarangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'UserAnnouncement' },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      submitForm() {
        // Logic to submit the announcement data and add it to the announcements array
        console.log('Announcement Submitted:', this.announcement);
        this.announcements.push({ ...this.announcement }); // Add the announcement to the array
        this.resetForm(); // Optional: Reset the form fields after submission
      },
      resetForm() {
        // Reset the announcement object to clear the form fields
        this.announcement = {
          title: '',
          description: '',
          attachment: null,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom style for table */
  .text-left {
    text-align: left;
  }
  </style>
  