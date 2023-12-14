<template>
    <v-container>
      <!-- Navigation Drawer -->
      <v-navigation-drawer app temporary v-model="drawer">
        <!-- Drawer content -->
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Obet"
            subtitle="Obet@gmailcom"
          ></v-list-item>
          <v-list dense nav>
            <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>
  
      <!-- App Bar -->
      <v-app-bar app color="primary">
        <!-- App bar content -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          ADMIN NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
      </v-container>
      <v-app>
  
      <!-- Header Row -->
      <v-row class="header-row">
        <v-col class="text-right">
          <h1>ADMIN ANALYTICS</h1>
        </v-col>
      </v-row>
  
      <!-- Table -->
      <v-row>
        <v-col>
          <v-simple-table class="custom-table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Baranggay</th>
                  <th class="text-left">Disease</th>
                  <th class="text-left">Deaths</th>
                  <th class="text-left">Sick</th>
                  <th class="text-left">Age</th>
                  <th class="text-left">Gender</th>
                  <th class="text-left">Actions</th>
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
                    <v-btn @click="updateRow(index)">Update</v-btn>
                    <v-btn @click="deleteRow(index)">Delete</v-btn>
                  </td>
                </tr>
                <!-- Add more rows as needed -->
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      
      <!-- Add Button -->
      <v-row class="add-button-row">
        <v-col class="text-right">
          <v-btn color="primary" @click="showForm = true">Add</v-btn>
        </v-col>
      </v-row>
  
      <!-- Form for adding/updating data -->
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
            <v-row class="text-right">
              <v-btn @click="showForm = false">Cancel</v-btn>
              <v-btn type="submit" color="primary">Save</v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'Analytic',
    data() {
      return {
        drawer: false,
        drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'residentpanel' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'UserSurvey' },
          { title: 'Appointment', icon: 'mdi-access-point', route: 'UserAppointment' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'UserBarangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'UserAnnouncement' },
        ],
        tableData: [
          { baranggay: 'User Baranggay', disease: 'Flu', deaths: 5, sick: 20 },
          // Add more data rows as needed
        ],
        showForm: false,
        formData: {
          barangay: '',
          disease: '',
          deaths: 0,
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
      async submitForm() {
        try {
          // Make an HTTP POST request to your CodeIgniter 4 backend
          const response = await this.$axios.post('/api/addData', this.formData);
  
          // Handle the response as needed
          if (response.status === 201) {
            // Data insertion successful
            this.tableData.push(response.data);
            this.showForm = false;
            this.resetForm();
          } else {
            // Data insertion failed
            console.error('Failed to add data');
          }
        } catch (error) {
          // Handle errors
          console.error('Error:', error);
  
          // Log the detailed error information
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error message:', error.message);
          }
        }
      },
      resetForm() {
        // Reset form data after submission
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
  .header-row {
    position: absolute;
    top: 1px;
    right: 20px;
  }
  .text-right {
    text-align: right;
    font-size: 10px;
    font-weight: bold;
  }
  
  .add-button-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  
  .custom-table th,
  .custom-table td {
    padding: 20px;
    border: 1px solid #dddddd;
    text-align: left;
    width: 400px;
  }
  .table-row-even {
    background-color: #f8f9fa;
  }
  
  .table-row-odd {
    background-color: #e9ecef;
  }
  </style>
  