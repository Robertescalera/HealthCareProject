<template>
    <v-container>
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Admin"
            subtitle="ADMIN@gmailcom"
          ></v-list-item>
          <v-list dense nav>
            <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          ADMIN NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
  
      <v-app>
        <v-row class="header-row">
          <v-col class="text-right">
            <h1>ADMIN DASHBOARD</h1>
          </v-col>
        </v-row>
  
        <v-row class="card">
          <v-col cols="12">
            <v-card>
              <v-card-title>
                <v-icon>mdi-account-group</v-icon>
                User Information
              </v-card-title>
              <v-card-text>
                <v-data-table
                  :headers="tableHeaders"
                  :items="userList"
                  :items-per-page="5"
                  class="elevation-1"
                  :item-key="item => item.id"
                  @click:row="onRowClick"
                >
                  <template v-slot:top>
                    <v-toolbar flat>
                      <v-btn @click="addUserDialog" color="primary">Add</v-btn>
                      <v-btn @click="updateUserDialog" :disabled="selectedItems.length !== 1" color="primary">Update</v-btn>
                      <v-btn @click="deleteUser" :disabled="selectedItems.length === 0" color="primary">Delete</v-btn>
                    </v-toolbar>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-app>
  
      <!-- Add User Dialog -->
  <v-dialog v-model="addUserDialogVisible" max-width="600">
    <v-card>
      <v-card-title>Add User</v-card-title>
      <v-card-text>
        <v-form ref="addUserForm" @submit.prevent="addUser">
          <v-text-field v-model="newUser.first_name" label="First Name"></v-text-field>
          <v-text-field v-model="newUser.last_name" label="Last Name"></v-text-field>
          <v-text-field v-model="newUser.email" label="Email"></v-text-field>
          <v-text-field v-model="newUser.role" label="Role"></v-text-field>
          <v-text-field v-model="newUser.password" label="Password" type="password"></v-text-field>
          <v-btn type="submit" color="primary">Save</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- Update User Dialog -->
  <v-dialog v-model="updateUserDialogVisible" max-width="600">
    <v-card>
      <v-card-title>Update User</v-card-title>
      <v-card-text>
        <v-form ref="updateUserForm" @submit.prevent="updateUser">
          <v-text-field v-model="selectedItems[0].first_name" label="First Name"></v-text-field>
          <v-text-field v-model="selectedItems[0].last_name" label="Last Name"></v-text-field>
          <v-text-field v-model="selectedItems[0].email" label="Email"></v-text-field>
          <v-text-field v-model="selectedItems[0].role" label="Role"></v-text-field>
          <v-text-field v-model="selectedItems[0].password" label="Password" type="password"></v-text-field>
          <v-btn type="submit" color="primary">Save</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Dashboard',
    data() {
      return {
        drawer: false,
        chart1Visible: false,
        chart2Visible: false,
        totalUsers: 20,
        totalPatients: 20,
        totalMedicine: 30,
        drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
          { title: 'Appointment', icon: 'mdi-lock', route: 'appointment' },
          { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
          { title: 'Users', icon: 'mdi-access-point', route: 'Users' },
        ],
        tableHeaders: [
          { text: 'First Name', value: 'first_name' },
          { text: 'Last Name', value: 'last_name' },
          { text: 'Email', value: 'email' },
          { text: 'Role', value: 'role' },
          { text: 'Password', value: 'password' },
        ],
        userList: [
          { id: 1, first_name: 'user1', last_name: 'esca', email: 'user1@example.com', role: 'user', password: 'password1' },
          { id: 1, first_name: 'user2', last_name: 'esca', email: 'user1@example.com', role: 'user', password: 'password1' },
         
          // Add more users as needed
        ],
        selectedItems: [],
        addUserDialogVisible: false,
        updateUserDialogVisible: false,
        newUser: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          role: '',
        },
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
        this.drawer = false;
      },
      onRowClick(item) {
        this.selectedItems = [item];
      },
      addUserDialog() {
        this.addUserDialogVisible = true;
      },
      addUser() {
  // Log the user data before making the request
  console.log('User Data:', this.newUser);

  axios.post('api/addUser', this.newUser)
    .then(response => {
      console.log('Server Response:', response.data);

      // Assuming the server response contains the inserted user data
      const insertedUser = response.data.user; // Modify this based on your actual response structure

      if (!insertedUser) {
        console.error('Error adding user: Invalid server response structure');
        return;
      }

      // Add the inserted user to the userList
      this.userList.push({ ...insertedUser });

      // Reset form and close dialog
      this.addUserDialogVisible = false;
      this.$refs.addUserForm.reset();
      
      // Reset the newUser object
      this.newUser = { first_name: '', last_name: '', email: '', role: '', password: '' };

      console.log('User added successfully:', insertedUser);
    })
    .catch(error => {
      console.error('Error adding user:', error);

      // Handle specific error cases if needed
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with:', error.response.data);

        // You can also check for specific error status codes and handle them accordingly
        if (error.response.status === 400) {
          console.error('Bad Request: Validation error or invalid data', error.response.data.messages);
        } else if (error.response.status === 500) {
          console.error('Internal Server Error: Something went wrong on the server', error.response.data.message);
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Request setup error:', error.message);
      }
    });
},



      updateUserDialog() {
        this.updateUserDialogVisible = true;
      },
      updateUser() {
        this.updateUserDialogVisible = false;
        this.$refs.updateUserForm.reset();
      },
      deleteUser() {
        // Implement logic for deleting selected user(s)
        console.log('Delete user logic');
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  