<template>
    <v-container>
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
        <v-app-bar-title>
         ADMIN NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
    
      <!-- Header -->
      <v-row class="header-row">
      <v-col cols="12">
        <h1 class="display-2">Medication Inventory</h1>
      </v-col>
    </v-row>

    <!-- Medication Inventory Table -->
    <v-card>
      <v-card-text>
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Medication Name</th>
                <th scope="col">Quantity Available</th>
                <th scope="col">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(medication, index) in medications" :key="index">
                <td>{{ medication.name }}</td>
                <td>{{ medication.quantity }}</td>
                <td>{{ medication.expiry }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'InventoryPage',
  data() {
    return {
      drawer: false,
      drawerItems: [
      { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'survey' },
      ],
      medications: [
        { name: 'Medication A', quantity: 50, expiry: '2023-12-31' },
        { name: 'Medication B', quantity: 30, expiry: '2023-11-30' },
        { name: 'Medication A', quantity: 50, expiry: '2023-12-31' },
        { name: 'Medication B', quantity: 30, expiry: '2023-11-30' },
        { name: 'Medication A', quantity: 50, expiry: '2023-12-31' },
        { name: 'Medication B', quantity: 30, expiry: '2023-11-30' },
        { name: 'Medication A', quantity: 50, expiry: '2023-12-31' },
        { name: 'Medication B', quantity: 30, expiry: '2023-11-30' },
        // Add more medications with their quantities and expiry dates
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
/* Add any additional styling as needed */
.header-row {
  margin-bottom: 20px;
  text-align: center;
}

.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #333;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  background-color: #007bff;
  color: #fff;
}

.table tbody+tbody {
  border-top: 2px solid #dee2e6;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}
</style>