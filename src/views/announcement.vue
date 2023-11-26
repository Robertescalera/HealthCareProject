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
        drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
          { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
          { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      submitForm() {
        // Logic to submit the announcement data
        console.log('Announcement Submitted:', this.announcement);
        // You can perform an API call or other actions here
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here to further enhance the form appearance */
  .header-row {
    margin-bottom: 20px;
  }
  .text-right h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
  </style>
  