<template>
    <v-container>
      <!-- Navigation Drawer -->
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
  
      <!-- App Bar -->
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>ADMIN NAUJAN HEALTH CARE CENTER</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
    
      <!-- Header -->
      <v-row class="header-row">
        <v-col>
          <h1 class="text-h5">SURVEY</h1>
        </v-col>
      </v-row>
  
      <!-- Survey Responses Table -->
      <v-card>
        <v-card-title class="headline">Survey Responses</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="formattedSurveyData"
            :items-per-page="10"
            class="elevation-1"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'SurveyPage',
    data() {
      return {
        drawer: false,
        drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
          { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
          { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'survey' },
        ],
        surveyData: {
          question1: '',
          question2: '',
          // Add more fields for other questions as needed
        },
      };
    },
    computed: {
      headers() {
        return [
          { text: 'Question', value: 'question' },
          { text: 'Answer', value: 'answer' },
        ];
      },
      formattedSurveyData() {
        return Object.keys(this.surveyData).map(key => ({
          question: key,
          answer: this.surveyData[key],
        }));
      },
    },
    methods: {
      submitSurvey() {
        // Logic to submit the survey data
        // Display the submitted survey data in the table
        // Survey data is already stored in the surveyData object
        console.log('Survey Data:', this.surveyData);
        // Optionally, reset the form after submission
        this.resetForm();
      },
      resetForm() {
        // Reset form fields after submission
        this.surveyData = {
          question1: '',
          question2: '',
          // Reset other fields as needed
        };
      },
      navigateTo(route) {
        this.$router.push(route);
        this.drawer = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .header-row {
    margin-bottom: 20px;
  }
  .text-h5 {
    font-size: 24px;
    margin: 0;
  }
  </style>
  