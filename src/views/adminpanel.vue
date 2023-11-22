<template>
  <v-card>
    <v-container>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list dense nav>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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

      <div class="d-flex flex-row">
        <v-tabs v-model="tab" direction="vertical">
          <v-tab v-for="(item, index) in tabs" :key="index" :value="item.value">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item v-for="(item, index) in tabs" :key="index" :value="item.value">
            <v-card flat>
              <v-card-title class="text-h5">{{ item.title }}</v-card-title>
              <v-card-text>
                {{ item.content }}
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-container>
  </v-card>
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
    tabs: [
      { title: 'Dashboard', icon: 'mdi-account', value: 'dashboard', content: 'Dashboard Content' },
      { title: 'Analytics', icon: 'mdi-lock', value: 'analytics', content: 'Analytics Content' },
      { title: 'Health Records', icon: 'mdi-access-point', value: 'HealthRecords', content: 'Health Records Content' },
      { title: 'Survey', icon: 'mdi-access-point', value: 'survey', content: 'Survey Content' },
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
