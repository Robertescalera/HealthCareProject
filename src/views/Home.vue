<template>
  <v-container>
    <v-row class="registration-row" justify="end">
        <v-btn @click="navigateTo('/register')" class="registration-btn">Register</v-btn>
        <v-btn @click="navigateTo('/signin')" class="registration-btn">Sign In</v-btn>
      </v-row>
    <!-- Navigation Drawer -->
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list dense nav>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-list-item prepend-icon="mdi-folder" title="" value="myfiles"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Home</v-btn>
      <v-btn @click="navigateTo('/About')">About</v-btn>
      <v-btn @click="navigateTo('/contact')">Contact</v-btn>
    </v-app-bar>

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

  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      drawer: false,
    };
  },
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
  padding: 20px; /* Add padding for space around content */
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

/* Responsive Styles */
@media (max-width: 600px) {
  .background-sheet {
    background-size: contain;
  }
}
</style>
