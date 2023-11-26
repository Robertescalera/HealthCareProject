<template>
  <v-container>
    <v-row class="header-row">
      <v-col class="text-right">
        <h1>HEALTH CARE RECORD</h1>
      </v-col>
    </v-row>
    <!-- Navigation Drawer -->
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

    <!-- App Bar -->
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="header-title">
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-card>
      <!-- Header Row -->
      <v-row class="header-row">
        <v-col v-for="header in headers" :key="header.value" class="text-left header-cell">
          {{ header.text }}
        </v-col>
        <v-col class="text-center header-cell">Actions</v-col>
      </v-row>

      <!-- Table Content -->
      <v-card-text>
        <v-row v-for="item in records" :key="item.name" class="content-row">
          <v-col v-for="(value, key) in item" :key="key" class="text-left content-cell">
            {{ value }}
          </v-col>
          <v-col class="text-center content-cell">
            <v-icon @click="editRecord(item)">mdi-pencil</v-icon>
            <v-icon @click="deleteRecord(item)">mdi-delete</v-icon>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Footer -->
    <v-footer app color="primary">
      <v-container>
        <span>&copy; 2023 Naujan Health Care Center. All rights reserved.</span>
      </v-container>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'HealthRecords',
  data() {
    return {
      drawer: false,
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Date of Birth', value: 'dateOfBirth' },
        { text: 'Gender', value: 'gender' },
        { text: 'Contact Number', value: 'contactNumber' },
        { text: 'Emergency Contact Details', value: 'emergencyContactDetails' },
        { text: 'Insurance Information', value: 'insuranceInformation' },
      ],
      records: [
        // Your record data here
      ],
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'survey' },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    editRecord(record) {
      // Implement logic to handle edit action
      console.log('Edit record:', record);
    },
    deleteRecord(record) {
      // Implement logic to handle delete action
      console.log('Delete record:', record);
    },
  },
};
</script>

<style scoped>
/* Add any additional styling as needed */
.top-left-drawer {
  position: absolute;
  top: 20px;
  left: 20px;
}

/* Style for the table content rows */
.content-row {
  padding: 8px 0; /* Adjust the padding as needed */
  border-bottom: 1px solid #ccc; /* Add a border between rows for separation */
}

/* Style for the table content cells */
.content-cell {
  padding: 8px 16px; /* Adjust the padding as needed */
  display: flex;
  justify-content: space-around;
}

.text-right {
  text-align: right;
  font-size: 10px;
  font-weight: bold;
  padding: 20px;
  border-bottom: 100px;
}
</style>
