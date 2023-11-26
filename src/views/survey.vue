<template>
    <v-container>
        <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
          title="Lolo mo Admin"
          subtitle="LOLOmoADMIN@gmailcom"
        ></v-list-item>
      </v-list>
      <v-list dense nav>
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
  
      <!-- Header -->
      <v-row class="header-row">
        <v-col>
          <h1>SURVEY</h1>
        </v-col>
      </v-row>
  
      <!-- Survey Form -->
      <v-form @submit.prevent="submitSurvey">
        <!-- Question 1 -->
        <v-row class="survey-question">
          <v-col>
            <h3>Question 1:</h3>
            <v-text-field v-model="surveyData.question1" label="Enter your answer" required></v-text-field>
          </v-col>
        </v-row>
  
        <!-- Question 2 -->
        <v-row class="survey-question">
          <v-col>
            <h3>Question 2:</h3>
            <v-textarea v-model="surveyData.question2" label="Enter your answer" required></v-textarea>
          </v-col>
        </v-row>
  
        <!-- Add more questions as needed -->
  
        <!-- Submit Button -->
        <v-row class="submit-row">
          <v-col>
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'SurveyPage',
    data() {
      return {
        surveyData: {
          question1: '',
          question2: '',
          // Add more fields for other questions as needed
        }
      };
    },
    methods: {
      submitSurvey() {
        // Logic to submit the survey data
        // You can send the surveyData to your backend or perform any necessary actions
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
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling as needed */
  .header-row {
    margin-bottom: 20px;
  }
  
  .survey-question {
    margin-bottom: 20px;
  }
  
  .submit-row {
    text-align: center;
    margin-top: 20px;
  }
  </style>
  