<template>
  <v-container fluid>
    <!-- Include Header Component -->
    <v-app-bar app color="primary">
      <v-app-bar-title class="text-styled">
      NAUJAN HEALTH CARE CENTER 
    </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
      <v-btn @click="navigateTo('/About')">About</v-btn>
      <v-btn @click="navigateTo('/contact')">Contact</v-btn>
      <v-btn @click="navigateTo('/signin')" class="registration-btn">Sign In</v-btn>
    </v-app-bar>

    <v-main class="main-content">
      <!-- Introduction Section -->
      <v-container fluid>
        <v-sheet class="background-sheet intro-section" :style="{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20210923/pngtree-health-care-gradient-blue-theme-light-effect-background-image_904155.png)' }">
          <v-row align="center" justify="center" class="fill-height">
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
        <v-sheet class="background-sheet services-section" :style="{ backgroundImage: 'url()' }">
          <v-row align="center" justify="center" class="fill-height">
            <v-col>
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
        <v-sheet class="background-sheet contact-section" :style="{ backgroundImage: 'url()' }">
          <v-row align="center" justify="center" class="fill-height">
            <v-col>
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
        <v-sheet class="background-sheet main-content-section" :style="{ backgroundImage: 'url()' }">
          <v-row align="center" justify="center" class="fill-height">
            <v-col>
              <h2 class="display-2 text-center white--text">Main Content Section</h2>
              <p class="text-center white--text">
                This is the main content section of your page.
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>

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
    </v-main>
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
      { title: 'Home', icon: 'mdi-account', route: 'adminpanel', text: 'Home' },
      { title: 'Analytics', icon: 'mdi-lock', route: 'analytics', text: 'Analytics' },
      { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords', text: 'Health Records' },
      { title: 'Survey', icon: 'mdi-access-point', route: 'survey', text: 'Survey' },
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

.text {
  text-align: left;
}
.background-sheet {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1px; /* Add padding for space around content */
}

.intro-section,
.services-section,
.contact-section,
.main-content-section {
  min-height: 100vh; /* Set minimum height to full viewport height */
  min-width: 91vw; /* Set minimum width to full viewport width */
}

.fill-height {
  height: 100%; /* Fill available height in sections */
}

.text-styled {
  font-size: 18px; /* Adjust font size */
  font-weight: bold; /* Make text bold */
  color: #ffffff; /* Set text color */
  text-transform: uppercase; /* Transform text to uppercase */
  letter-spacing: 2px;
  text-align: left; /* Adjust letter spacing */
  /* Add any other styles as needed */
}

/* Responsive Styles */
@media (max-width: 1000px) {
  .background-sheet {
    background-size: contain;
  }
}

/* Remove default margin and padding */
.v-container {
  margin: 0;
  padding: 0;
}

.v-main {
  margin: 0;
  padding: 0;
}

.registration-btn {
  border: 1px solid #ffffff; /* Change color and thickness as needed */
}
</style>
