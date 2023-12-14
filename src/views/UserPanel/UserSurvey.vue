<template>
    <v-app>
      <v-container>
        <v-row class="header-row">
          <v-col class="text-right">
            <h1>SURVEY</h1>
          </v-col>
        </v-row>
  
        <v-navigation-drawer app temporary v-model="drawer">
          <v-list>
            <v-list-item
              prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
              title="Obet"
              subtitle="Obet@gmailcom"
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
            WELCOME to NAUJAN HEALTH CARE CENTER
          </v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn @click="navigateTo('/')">Logout</v-btn>
        </v-app-bar>
      </v-container>
  
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Survey Form</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="submitSurvey">
                  <v-text-field v-model="survey.name" label="Name"></v-text-field>
                  <v-text-field v-model="survey.sickness" label="Sickness"></v-text-field>
                  <v-text-field v-model="survey.age" label="Age"></v-text-field>
                  <v-text-field v-model="survey.days" label="How many days?"></v-text-field>
  
                  <v-btn color="primary" type="submit">Submit</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        drawer: false,
        survey: {
          name: '',
          age: null,
          sickness: '',
          age: '',
          days: null,
        },
        drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'residentpanel' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'UserSurvey' },
        { title: 'Appointment', icon: 'mdi-access-point', route: 'UserAppointment' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'UserBarangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'UserAnnouncement' },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      submitSurvey() {
        axios.post('api/insertSurvey', this.survey)
          .then(response => {
            console.log('Survey submitted successfully:', response.data);
            this.resetSurveyForm();
          })
          .catch(error => {
            console.error('Error submitting survey:', error);
          });
      },
      resetSurveyForm() {
        this.survey = {
          name: '',
          sickness: '',
          age: null,    
          days: null,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .header-row {
    margin-bottom: 20px;
  }
  .text-right h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
  </style>
  