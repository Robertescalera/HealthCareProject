<!-- LoginView.vue -->
<template>
    <div>
      <h1>Welcome to Our Application</h1>
      <login />
    </div>
  </template>
  
  <script>
  // Import the LoginForm component
  import login from '@/components/login.vue';
  
  export default {
    components: {
      login
    }
  };
  </script>
  

  