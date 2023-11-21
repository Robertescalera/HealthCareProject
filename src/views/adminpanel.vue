<template>
  <v-container>
    <v-row>
      <!-- Sidebar -->
      <v-col class="col-2">
        <v-list>
          <v-list-item v-for="item in drawerItems" :key="item.title" @click="navigateTo(item.route)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Main Content -->
      <v-app-bar app color="primary">
        <!-- Left-aligned title -->
        <v-app-bar-title>
          NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
  
        <!-- Right-aligned buttons -->
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')"></v-btn>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
    
      </v-app-bar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
        { title: 'Analytics', icon: 'mdi-chart-bar', route: '/analytics' },
        { title: 'Survey', icon: 'mdi-poll', route: '/survey' },
        { title: 'Option 1', icon: 'mdi-check', route: '/option1' },
        { title: 'Option 2', icon: 'mdi-cog', route: '/option2' },
        { title: 'Option 3', icon: 'mdi-information', route: '/option3' },
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
