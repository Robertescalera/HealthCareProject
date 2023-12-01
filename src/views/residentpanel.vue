<template>
  <v-container>
    <v-row class="header-row">
      <v-col class="text-right">
        <h1>USER DASHBOARD</h1>
      </v-col>
    </v-row>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
          title="Lolo mo User"
          subtitle="LOLOmoUser@gmailcom"
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
        WELCOME to NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Toggle Button to Show/Hide Chart -->
        <v-row class="toggle-chart">
          <v-btn @click="toggleChartVisibility">Toggle Chart</v-btn>
        </v-row>

        <!-- Bar Chart -->
        <v-row v-if="chartVisible">
          <v-col>
            <canvas id="barChart" ref="barChart"></canvas>
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
  data() {
    return {
      drawer: false,
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'residentpanel' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'UserSurvey' },
        { title: 'Appointment', icon: 'mdi-access-point', route: 'Appointment' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'UserInventory' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'UserBarangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
      ],
      chartVisible: false,
      barChart: null,
    };
  },
  methods: {
    createBarChart() {
      if (this.barChart) {
        this.barChart.destroy();
      }

      const ctx = this.$refs.barChart;

      if (ctx) {
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
      }
    },
    toggleChartVisibility() {
      this.chartVisible = !this.chartVisible;

      if (this.chartVisible) {
        this.$nextTick(() => {
          this.createBarChart();
        });
      } else {
        if (this.barChart) {
          this.barChart.destroy();
          this.barChart = null;
        }
      }
    },
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
  },
  mounted() {
    // Optionally, you can render the chart initially if needed
    // this.createBarChart();
  },
};
</script>

<style scoped>
.toggle-chart {
  margin-bottom: 20px;
}
</style>
