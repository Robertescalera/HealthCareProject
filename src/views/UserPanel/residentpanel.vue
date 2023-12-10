<template>
  
  <v-container>
    <v-row class="header-row">
      <v-col class="text-right">
        <h1>USER DASHBOARD</h1>
      </v-col>
    </v-row>

    <v-navigation-drawer app temporary v-model="drawer">
      <!-- Include your navigation drawer content here -->
      <v-list>
        <v-list-item
          prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
          title="Lolo mo User"
          subtitle="LOLOmoUser@gmailcom"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary">
      <!-- Include your app bar content here -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        WELCOME to NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>
    </v-container>

    <v-app>

    <v-main>
      <v-app>
        <!-- Cards Section -->
        <v-row class="mb-4">
          <v-col cols="12" md="6" lg="3" v-for="(card, index) in dashboardCards" :key="index">
            <v-card outlined>
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-text class="text-h5">{{ card.data }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Bar Chart Card -->
        <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>Bar Chart</v-card-title>
        <v-card-text>
          <canvas id="barChart" ref="barChart" style="max-width: 400px; height: 2px;"></canvas>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Dashboard',
  data() {
    return {
      drawer: false,
      dashboardCards: [
        { title: 'Patients Admitted', data: '20' },
        { title: 'Doctors Available', data: '10' },
        { title: 'Medication Available', data: '30' },
        { title: 'Total Active Staff', data: '50' },
        { title: 'Severe Disease', data: '5' },
      ],
      barChart: null,
    };
  },
  methods: {
    createBarChart() {
      if (this.barChart) {
        this.barChart.destroy();
      }

      const ctx = document.getElementById('barChart').getContext('2d');
      this.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
          datasets: [{
            label: 'Sample Data',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    navigateTo(route) {
      // Your navigation logic here
    },
  },
  mounted() {
    this.createBarChart();
  },
};
</script>

<style scoped>
.header-row {
  margin-bottom: 20px;
}
</style>