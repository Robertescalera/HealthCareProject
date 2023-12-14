<template>
  <v-app>
  <v-container>
    <!-- Navigation Drawer -->
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
          title="Lolo mo Admin"
          subtitle="LOLOmoADMIN@gmailcom"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>ADMIN NAUJAN HEALTH CARE CENTER</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>
  </v-container>

    <!-- Header -->
     <!-- Header -->
     <v-row class="header-row">
      <v-col>
        <h1 class="text-h5">SURVEY</h1>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'SurveyPage',
  data() {
    return {
      drawer: false,
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
        { title: 'Barangay', icon : 'mdi-access-point', route: 'barangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'survey' },
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'sickness' },
        { text: 'Age', value: 'age' },
        { text: 'Location', value: 'days' },
      ],
      items: [],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
    async fetchSurveyData() {
      try {
        const response = await this.$axios.get('api/getSurveyData');
        this.items = response.data.data;
      } catch (error) {
        console.error('Error fetching survey data:', error);
      }
    },
  },
  created() {
    // Fetch survey data when the component is created
    this.fetchSurveyData();
  },
};
</script>

<style scoped>
.header-row {
  margin-bottom: 0px;
  margin-top: 50px;
}
.text-h5 {
  font-size: 24px;
  margin: 0;
}
</style>
