<template>
    <v-container>
     

  
    </v-container>

    <v-navigation-drawer app temporary v-model="drawer">
        <v-list dense nav>
          <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Home',
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
  },
};
</script>
