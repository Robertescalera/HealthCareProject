<template>
  <v-container>
    <v-app-bar app color="primary">
      <!-- ... (existing code) ... -->
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
      <!-- ... (existing code) ... -->
    </v-navigation-drawer>

    <!-- Button to toggle chart visibility -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-btn @click="toggleChartsVisibility">Toggle Charts Visibility</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Chart 1 (initially invisible) -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <canvas id="chart1" v-if="chartsVisible"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Chart 2 (initially invisible) -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <canvas id="chart2" v-if="chartsVisible"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Existing Chart (initially invisible) -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <canvas id="myChart" v-if="chartsVisible"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-container>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Dashboard',
  data: () => ({
    drawer: false,
    tab: 'dashboard',
    chartsVisible: false, // Added state for chart visibility
    drawerItems: [
      { title: 'Dashboard', icon: 'mdi-account', route: 'dashboard' },
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
    createCharts() {
      // ... (existing createCharts method)
    },
    toggleChartsVisibility() {
      this.chartsVisible = !this.chartsVisible;
      if (this.chartsVisible) {
        // Create or update the charts when visibility is toggled
        this.createCharts();
      }
    },
  },
  mounted() {
    // Create the charts when the component is mounted
    this.createCharts();
  },
};
</script>
