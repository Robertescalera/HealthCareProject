<template>
  <v-container>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-list dense nav>
        <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Add the chart here -->
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
    createChart() {
      // Chart data and options
      const data = {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
        datasets: [
          {
            label: 'Disease Percentage',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
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
        // Create the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: options,
        });
      });
    },
  },
  mounted() {
    // Create the chart when the component is mounted
    this.createChart();
  },
};
</script>
