<template>
  <v-container>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

    <!-- Navigation Drawer -->
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
          title="Lolo mo Admin"
          subtitle="LOLOmoADMIN@gmailcom"
        ></v-list-item>
        <v-list dense nav>
          <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
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



    <!-- Header Row -->
    <v-row class="header-row">
      <v-col class="text-right">
        <h1>ADMIN DASHBOARD</h1>
      </v-col>
    </v-row>

    <!-- Cards -->
    <v-row class="card">
      <!-- Total Users Card -->
      <v-col cols="12" md="4" class="mb-4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-account-group</v-icon>
            Total Users
          </v-card-title>
          <v-card-text>
            <h1>{{ totalUsers }}</h1>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Patients Card -->
      <v-col cols="12" md="4" class="mb-4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-hospital-user</v-icon>
            Total Patients
          </v-card-title>
          <v-card-text>
            <h1>{{ totalPatients }}</h1>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Medicine Card -->
      <v-col cols="12" md="4" class="mb-4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-pill</v-icon>
            Total Medicine
          </v-card-title>
          <v-card-text>
            <h1>{{ totalMedicine }}</h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Buttons for Chart Visibility -->
    <v-row class="top-left-buttons">
      <v-col>
        <v-btn @click="toggleChartVisibility('chart1', chart1Visible)">Toggle Chart 1</v-btn>
        <v-btn @click="toggleChartVisibility('chart2', chart2Visible)">Toggle Chart 2</v-btn>
      </v-col>
    </v-row>

    <!-- Chart 1 -->
    <v-main>
      <v-container v-if="chart1Visible">
        <v-row>
          <v-col>
            <canvas id="chart1"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Chart 2 -->
    <v-main>
      <v-container v-if="chart2Visible">
        <v-row>
          <v-col>
            <canvas id="chart2"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Leaflet Map -->
    <v-main>
      <v-container>
        <div id="map" style="height: 400px;"></div>
      </v-container>
    </v-main>
  </v-container>
</template>

<script>
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet
import Chart from 'chart.js/auto'; // Import Chart.js

export default {
  name: 'Dashboard',
  data() {
    return {
      drawer: false,
      chart1Visible: false,
      chart2Visible: false,
      totalUsers: 500, // Replace with actual total users count
      totalPatients: 200, // Replace with actual total patients count
      totalMedicine: 300, // Replace with actual total medicine count
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
      ],
    };
  },
  methods: {
    // Function to toggle chart visibility
    toggleChartVisibility(chartId, isVisible) {
      this[`${chartId}Visible`] = !isVisible;

      if (this[`${chartId}Visible`]) {
        const chartData = this.getChartData(chartId);
        if (chartData) {
          this.createChart(chartId, chartData);
        } else {
          console.error(`No data found for ${chartId}`);
        }
      }
    },
    // Function to create chart
    createChart(chartId, data) {
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      this.$nextTick(() => {
        try {
          const ctx = document.getElementById(chartId);
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: data,
              options: options,
            });
          }
        } catch (error) {
          console.error('Error creating chart:', error);
        }
      });
    },
    // Function to retrieve chart data
    getChartData(chartId) {
      // Replace with your chart data retrieval logic for chart1 and chart2
      // Example data is used here for demonstration purposes
      if (chartId === 'chart1') {
        return {
          labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
          datasets: [
            {
              label: 'Chart 1 Data',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: [65, 59, 80, 81, 56],
            },
          ],
        };
      } else if (chartId === 'chart2') {
        return {
          labels: ['Label A', 'Label B', 'Label C', 'Label D', 'Label E'],
          datasets: [
            {
              label: 'Chart 2 Data',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              data: [30, 45, 75, 60, 90],
            },
          ],
        };
      }
      return null;
    },
    // Function to initialize Leaflet map
    initializeMap() {
      const map = L.map('map').setView([13.3833, 121.1833], 13); // Coordinates for Naujan, Oriental Mindoro, Philippines

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([13.3833, 121.1833])
        .addTo(map)
        .bindPopup('Naujan, Oriental Mindoro, Philippines')
        .openPopup();
    },
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
  },
  mounted() {
    // Create charts
    this.createChart('chart1', this.getChartData('chart1'));
    this.createChart('chart2', this.getChartData('chart2'));

    // Initialize Leaflet Map
    this.initializeMap();
  },
};
</script>


<style scoped>
.top-left-buttons {
  position: absolute;
  top: 50px;
  left: 20px;
  bottom: 60px;
}
.mb-4 {
  margin-bottom: 20px; /* You can adjust the margin as needed */
}

.header-row {
  position: absolute;
  top: 65px;
  right: 20px;
  bottom: 60px;
}
.text-right {
  text-align: right;
  font-size: 10px;
  font-weight: bold;
}

.card {
  top: 40px;
}
</style>
