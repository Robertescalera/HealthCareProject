<template>
    <v-container>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Lolo mo Admin"
            subtitle="LOLOmoADMIN@gmailcom"
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
          ADMIN NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
  
      <v-row class="header-row">
        <v-col class="text-right">
          <h1>ADMIN ANALYTICS</h1>
        </v-col>
      </v-row>
  
      <v-row class="button-row">
        <v-col>
          <v-btn @click="toggleChartVisibility('chart1', chart1Visible)">Toggle Chart 1</v-btn>
          <v-btn @click="toggleChartVisibility('chart2', chart2Visible)">Toggle Chart 2</v-btn>
        </v-col>
      </v-row>
  
      <v-main>
        <v-container v-if="chart1Visible">
          <v-row>
            <v-col>
              <canvas id="chart1"></canvas>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      <v-main>
        <v-container v-if="chart2Visible">
          <v-row>
            <v-col>
              <canvas id="chart2"></canvas>
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
        chart1Visible: false,
        chart2Visible: false,
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
            const myChart = new Chart(ctx, {
              type: 'bar',
              data: data,
              options: options,
            });
          }
        });
      },
      toggleChartVisibility(chartId, isVisible) {
        this[`${chartId}Visible`] = !isVisible;
  
        if (this[`${chartId}Visible`]) {
          this.createChart(chartId, this.getChartData(chartId));
        }
      },
      getChartData(chartId) {
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
    },
    mounted() {
      this.createChart('chart1', this.getChartData('chart1'));
      this.createChart('chart2', this.getChartData('chart2'));
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
  