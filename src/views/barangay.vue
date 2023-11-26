<template>
    <v-container>
      <!-- Navigation Drawer -->
      <v-navigation-drawer app temporary v-model="drawer">
        <!-- Drawer content -->
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
  
      <!-- App Bar -->
      <v-app-bar app color="primary">
        <!-- App bar content -->
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
          <h1>ADMIN ANALYTICS</h1>
        </v-col>
      </v-row>
  
      <!-- Buttons Row -->
      <v-row class="button-row">
        <v-col>
          <v-btn v-for="i in 5" :key="`chart${i}`" @click="toggleChartVisibility(`chart${i}`)">
            Barangay {{ i }}
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Charts -->
      <v-main v-for="i in 5" :key="`chart-container-${i}`">
        <v-container v-if="isVisible(`chart${i}`)">
          <v-row>
            <v-col>
              <canvas :id="`chart${i}`"></canvas>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-container>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'Analytic',
    data() {
      return {
        drawer: false,
        chartVisibility: {
          chart1: false,
          chart2: false,
          chart3: false,
          chart4: false,
          chart5: false,
        },
        drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
          { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
          { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Inventory', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
        ],
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
      createChart(chartId, data) {
        const options = {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        };
  
        this.$nextTick(() => {
          const ctx = document.getElementById(chartId);
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: data,
              options: options,
            });
          }
        });
      },
      toggleChartVisibility(chartId) {
        this.chartVisibility[chartId] = !this.chartVisibility[chartId];
  
        if (this.chartVisibility[chartId]) {
          this.createChart(chartId, this.getChartData(chartId));
        }
      },
      isVisible(chartId) {
        return this.chartVisibility[chartId];
      },
      getChartData(chartId) {
        // Define chart data based on chartId (similar to your previous logic)
        // Return appropriate data structure for each chart
      },
    },
    mounted() {
      // Create initial charts on component mount
      for (let i = 1; i <= 5; i++) {
        const chartId = `chart${i}`;
        this.createChart(chartId, this.getChartData(chartId));
      }
    },
  };
  </script>
  
  <style scoped>
  .header-row {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .button-row {
    position: absolute;
    top: 60px;
    right: 20px;
  }
  .text-right {
    text-align: right;
    font-size: 10px;
    font-weight: bold;
  }
  </style>
  