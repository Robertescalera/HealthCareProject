<template>
  <v-container>
    <v-app-bar app color="primary">
      <!-- Left-aligned title -->
      <v-app-bar-title>
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>

      <!-- Right-aligned buttons -->
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

    <!-- Navigation drawer for main menu -->
    <v-navigation-drawer app :clipped="clipped" v-model="drawer">
      <v-list dense>
        <v-list-item v-for="item in mainMenuItems" :key="item.title" @click="navigateTo(item.route)">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Navigation drawer for admin menu -->
    <v-navigation-drawer app :clipped="clipped" v-model="adminDrawer" right>
      <v-list dense>
        <v-list-item-group>
          <v-list-item v-for="item in adminMenuItems" :key="item.title" @click="navigateTo(item.route)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid>
      <v-row>
        <!-- Sidebar -->
        <v-col cols="3">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-list dense>
            <v-list-item v-for="item in mainMenuItems" :key="item.title" @click="navigateTo(item.route)">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Main Content -->
        <v-col cols="9">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      adminDrawer: false,
      mainMenuItems: [
        { title: 'Dashboard', icon: 'fa-home', route: '/dashboard' },
      ],
      adminMenuItems: [
        { title: 'Analytics', icon: 'mdi-chart-bar', route: '/analytics' },
        { title: 'Surveys', icon: 'mdi-poll', route: '/surveys' },
        { title: 'Census', icon: 'mdi-account-group', route: '/census' },
        { title: 'Inventory', icon: 'mdi-package-variant-closed', route: '/inventory' },
        { title: 'Announcements', icon: 'mdi-megaphone', route: '/announcements' },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
