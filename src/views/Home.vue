<template>
  <v-container>
    <!-- Include Header Component -->
    <v-app-bar app color="primary">
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
      <v-btn @click="navigateTo('/About')">About</v-btn>
      <v-btn @click="navigateTo('/contact')">Contact</v-btn>
    </v-app-bar>

    <v-row class="registration-row" justify="end">
      <v-btn @click="navigateTo('/register')" class="registration-btn">Register</v-btn>
      <v-btn @click="navigateTo('/signin')" class="registration-btn">Sign In</v-btn>
    </v-row>

    <!-- Main Content -->
    <v-main>
      <!-- Introduction Section -->
      <v-container fluid>
        <v-sheet class="background-sheet intro-section">
          <v-row align="center" justify="center">
            <v-col>
              <h1 class="display-2 text-center white--text">Welcome to Naujan Health Care Center</h1>
              <p class="text-center white--text">
                Providing Quality Health Care Services for Your Well-being
              </p>
              <p class="text-align-left white--text">
                Our dedicated team of healthcare professionals is committed to ensuring the best possible care for you and your loved ones.
              </p>
              <p class="text-center white--text">
                Explore our services and facilities to discover how we prioritize your health and wellness.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>

      <!-- Services Section -->
      <v-container fluid>
        <v-sheet class="background-sheet services-section">
          <v-row align="center" justify="center">
            <v-col>
              <!-- Add your services content here -->
              <h2 class="display-2 text-center white--text">Our Services</h2>
              <p class="text-center white--text">
                Describe the healthcare services you provide.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>

      <!-- Contact Section -->
      <v-container fluid>
        <v-sheet class="background-sheet contact-section">
          <v-row align="center" justify="center">
            <v-col>
              <!-- Add your contact content here -->
              <h2 class="display-2 text-center white--text">Contact Us</h2>
              <p class="text-center white--text">
                Provide contact information and how to reach your healthcare center.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>

      <!-- Main Content Section -->
      <v-container fluid>
        <v-sheet class="background-sheet main-content-section">
          <v-row align="center" justify="center">
            <v-col>
              <!-- Add your main content here -->
              <h2 class="display-2 text-center white--text">Main Content Section</h2>
              <p class="text-center white--text">
                This is the main content section of your page.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="primary">
      <v-container>
        <span>&copy; 2023 Naujan Health Care Center. All rights reserved.</span>
      </v-container>
    </v-footer>

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
  </v-container>
</template>

<script>
// Import Header Component
import header from '@/components/Header/header.vue';

export default {
  name: 'Home',
  components: {
    // Register Header Component
    header,
  },
  data: () => ({
    drawer: false,
    tab: 'dashboard',
    drawerItems: [
      { title: 'Home', icon: 'mdi-account', route: 'adminpanel' },
      { title: 'Analytics', icon: 'mdi-lock', route: 'analytics' },
      { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
      { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
    ],
  }),
  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.background-sheet {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px; /* Add padding for space around content */
}

.intro-section {
  height: 60vh; /* Adjust the height for the introduction section */
}

.services-section {
  height: 50vh; /* Adjust the height for the services section */
}

.contact-section {
  height: 40vh; /* Adjust the height for the contact section */
}

.main-content-section {
  height: 70vh; /* Adjust the height for the main content section */
}

/* Responsive Styles */
@media (max-width: 600px) {
  .background-sheet {
    background-size: contain;
  }
}
</style>
