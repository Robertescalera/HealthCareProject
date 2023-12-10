<template>
  
    <v-container>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Lolo mo Admin"
            subtitle="LOLOmoADMIN@gmailcom"
          ></v-list-item>
          <v-list dense nav>
            <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          ADMIN NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
    </v-container>
    </v-container>
    <v-app>
  
    <v-row class="text-left">
        <v-col class="text-left">
          <h1 class="title">ADMIN ANALYTICS</h1>
        </v-col>
      </v-row>
  
    <v-app>
      
  
      <v-row>
        <v-col>
          <v-simple-table class="custom-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Baranggay</th>
                  <th>Disease</th>
                  <th>Deaths</th>
                  <th>Sick</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in tableData" :key="index" :class="index % 2 === 0 ? 'table-row-even' : 'table-row-odd'">
                  <td>{{ row.baranggay }}</td>
                  <td>{{ row.disease }}</td>
                  <td>{{ row.deaths }}</td>
                  <td>{{ row.sick }}</td>
                  <td>{{ row.age }}</td>
                  <td>{{ row.gender }}</td>
                  <td>
                    <v-btn @click="updateRow(index)" color="primary">Update</v-btn>
                    <v-btn @click="deleteRow(index)" color="error">Delete</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
  
      <v-row class="add-button-row">
        <v-col class="text-left">
          <v-btn color="primary" @click="showForm = true">Add</v-btn>
        </v-col>
      </v-row>
  
      <v-row v-if="showForm">
        <v-col>
          <v-form ref="form" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="formData.baranggay" label="Baranggay"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="formData.disease" label="Disease"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="formData.deaths" label="Deaths"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="formData.sick" label="Sick"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="formData.age" label="Age"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="formData.gender" label="Gender"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="text-center">
              <v-btn @click="showForm = false" color="error">Cancel</v-btn>
              <v-btn type="submit" color="primary">Save</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-app>
    </v-app>
  
  </template>
  
  <script>
  export default {
    name: 'Analytic',
    data() {
      return {
        drawer: false,
        drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
          { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
          { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
        ],
        tableData: [
          { baranggay: 'Baranggay 1', disease: 'Flu', deaths: 5, sick: 20, age: 20, gender: 'unknown'},
          { baranggay: 'Baranggay 1', disease: 'Flu', deaths: 5, sick: 20, age: 20, gender: 'unknown'},
          { baranggay: 'Baranggay 1', disease: 'Flu', deaths: 5, sick: 20, age: 20, gender: 'unknown'},
          { baranggay: 'Baranggay 1', disease: 'Flu', deaths: 5, sick: 20, age: 20, gender: 'unknown'},
          
          
        ],
        showForm: false,
        formData: {
          baranggay: '',
          disease: '',
          deaths: '',
          sick: '',
          age: '',
          gender: '',
        },
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
        this.drawer = false;
      },
      updateRow(index) {
      },
      deleteRow(index) {
      },
      submitForm() {
        this.tableData.push({ ...this.formData });
        this.showForm = false;
        this.resetForm();
      },
      resetForm() {
        this.formData = {
          baranggay: '',
          disease: '',
          deaths: '',
          sick: '',
          age: '',
          gender: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  
  .custom-table th,
  .custom-table td {
    text-align: center;
    min-width: 215px;
    height: 80px;
    
  }
  
  .table-row-even {
    background-color: #f0f0f0; /* Light gray background for even rows */
  }
  
  .table-row-odd {
    background-color: #ffffff; /* White background for odd rows */
  }
  
  .add-button-row {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .add-button-row v-btn {
    color: #ffffff; /* White text color for the "Add" button */
  }
  </style>
  