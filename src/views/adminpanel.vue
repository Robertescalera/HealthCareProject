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
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

    <!-- Button to toggle the visibility of charts -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-btn @click="toggleChartVisibility('chart1', chart1Visible)">Toggle Chart 1</v-btn>
            <v-btn @click="toggleChartVisibility('chart2', chart2Visible)">Toggle Chart 2</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

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

  </v-container>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Dashboard',
  data() {
    return {
      drawer: false,
      chart1Visible: false,
      chart2Visible: false,
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'dashboard' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytics' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'survey' },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
    createCharts(chartId, data) {
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      // Use $nextTick to ensure the DOM is updated
      this.$nextTick(() => {
        const ctx = document.getElementById(chartId).getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: options,
        });
      });
    },
    toggleChartVisibility(chartId, isVisible) {
      this[`${chartId}Visible`] = !isVisible;
      if (this[`${chartId}Visible`]) {
        this.createCharts(chartId, this.getChartData(chartId));
      }
    },
    getChartData(chartId) {
      if (chartId === 'chart1') {
        // Sample barangay data (replace with your actual data)
        const barangays = [
          { name: 'Poblacion I', value: 25 },
          { name: 'General Esco', value: 49 },
          // Add more barangay data here...
        ];

        // Extract barangay names and values for the chart
        const labels = barangays.map((barangay) => barangay.name);
        const dataValues = barangays.map((barangay) => barangay.value);

        return {
          labels: labels,
          datasets: [
            {
              label: 'Barangay Data',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: dataValues,
            },
          ],
        };
      } else if (chartId === 'chart2') {
        // Sample data for a different chart (if needed)
        // Modify this section according to your chart data requirements
        return {
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
      }

      return null;
    },
  },
  mounted() {
    // Create the first chart with barangay data when the component is mounted
    this.createCharts('chart1', this.getChartData('chart1'));
  },
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
