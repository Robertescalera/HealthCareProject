<!-- VueForm.vue -->
<template>
    <div>
      <h2>Login Form</h2>
      <form @submit.prevent="submitForm">
        <label for="username">Username:</label>
        <input v-model="formData.username" type="text" id="username" required>
  
        <label for="password">Password:</label>
        <input v-model="formData.password" type="password" id="password" required>
  
        <button type="submit">Submit</button>
      </form>
      <p>{{ responseMsg }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          username: '',
          password: '',
        },
        responseMsg: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          // Ensure the 'Content-Type' header is set to 'application/json'
          const response = await axios.post(
            'http://localhost:8080/api/insertF',
            this.formData,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
  
          if (response.data && response.data.msg) {
            this.responseMsg = response.data.msg;
            console.log('Data inserted successfully:', this.responseMsg);
          } else {
            console.error('Invalid response format:', response);
          }
        } catch (error) {
          console.error(
            'Data insertion failed:',
            error.response ? error.response.data : error.message
          );
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  