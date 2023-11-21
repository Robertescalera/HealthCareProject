<template>
  <v-container>
    <v-app-bar app color="primary">
      <!-- Left-aligned title -->
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>

      <!-- Right-aligned buttons -->
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
      <v-btn @click="navigateTo('/about')">About</v-btn>
      <v-btn @click="navigateTo('/contact')">Contact</v-btn>
    </v-app-bar>

    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h5">Contact Us</v-card-title>
          <v-card-text>
            <p>Feel free to reach out to us!</p>
            <v-divider></v-divider>
            <v-form v-if="contactForm" @submit.prevent="submitForm">
              <v-text-field v-model="contactForm.name" label="Your Name" required></v-text-field>
              <v-text-field v-model="contactForm.email" label="Your Email" type="email" required></v-text-field>
              <v-textarea v-model="contactForm.message" label="Message" required></v-textarea>
              <v-btn type="submit" color="primary">Submit</v-btn>
            </v-form>

            <!-- Email and Contact Number -->
            <v-divider></v-divider>
            <p>Email: info@naujanhealthcare.com</p>
            <p>Contact Number: +123 456 7890</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-footer app color="primary">
        <v-container>
          <span>&copy; 2023 Naujan Health Care Center. All rights reserved.</span>
        </v-container>
      </v-footer>
   
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    submitForm() {
      // Implement form submission logic
      console.log('Contact form submitted:', this.contactForm);
      // You can add your logic to send the form data to a server or perform other actions
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
