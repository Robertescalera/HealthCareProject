<template>
  <v-container>

    <v-navigation-drawer app temporary v-model="drawer">
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
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

   

    <!-- Add the first chart here -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <canvas id="chart1"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Add the second chart here -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <canvas id="chart2"></canvas>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Add the existing chart here -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <canvas id="myChart"></canvas>
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
      // Chart data and options for the first chart
      const data1 = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [
          {
            label: 'Chart 1',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
          },
        ],
      };

      // Chart data and options for the second chart
      const data2 = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        datasets: [
          {
            label: 'Chart 2',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [30, 45, 75, 60, 90],
          },
        ],
      };

      const data = {
        labels: ['Category X', 'Category Y', 'Category Z', 'Category W', 'Category V'],
        datasets: [
          {
            label: 'Existing Chart',
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
            data: [50, 70, 40, 55, 65],
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      // Use $nextTick to ensure the DOM is updated
      this.$nextTick(() => {
        // Create the first chart
        const ctx1 = document.getElementById('chart1').getContext('2d');
        new Chart(ctx1, {
          type: 'bar',
          data: data1,
          options: options,
        });

        // Create the second chart
        const ctx2 = document.getElementById('chart2').getContext('2d');
        new Chart(ctx2, {
          type: 'bar',
          data: data2,
          options: options,
        });

      });
    },
  },
  mounted() {
    // Create the charts when the component is mounted
    this.createCharts();
  },
};
</script>
