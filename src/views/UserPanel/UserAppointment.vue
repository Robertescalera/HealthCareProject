<template>
    <v-container>
      <v-row class="header-row">
        <v-col class="text-right">
          <h1 class="display-2"> YOUR   APPOINTMENT</h1>
        </v-col>
      </v-row>
  
      <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Lolo mo User"
            subtitle="LOLOmoUser@gmailcom"
          ></v-list-item>
        </v-list>
        <v-list dense nav>
          <v-list-item v-for="(item, index) in drawerItems" :key="index" @click="navigateTo(item.route)">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          WELCOME to NAUJAN HEALTH CARE CENTER
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
  
      <v-card>
        <v-row class="headerr-row">
          <v-col v-for="header in headers" :key="header.value" class="text-left header-cell">
            {{ header.text }}
          </v-col>
          <v-col class="text-center header-cell">Actions</v-col>
        </v-row>
  
        <v-card-text>
          <v-row v-for="item in records" :key="item.name" class="content-row">
            <v-col v-for="(value, key) in item" :key="key" class="text-left content-cell">
              {{ value }}
            </v-col>
            <v-col class="text-center content-cell">
              <v-icon @click="editRecord(item)" class="action-icons">mdi-pencil</v-icon>
              <v-icon @click="deleteRecord(item)" class="action-icons">mdi-delete</v-icon>
              <v-icon @click="openAppointmentForm(item)" class="action-icons">mdi-calendar-plus</v-icon>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
  
      <v-dialog v-model="editDialog" max-width="500px">
        <!-- ... existing code ... -->
      </v-dialog>
  
      <v-dialog v-model="appointmentDialog" max-width="500px">
        <v-card>
          <v-card-title>Appointment Form</v-card-title>
          <v-card-text>
            <v-form ref="appointmentForm">
              <v-text-field v-model="appointmentDetails.name" label="Name"></v-text-field>
              <v-text-field v-model="appointmentDetails.date" label="Date"></v-text-field>
              <v-text-field v-model="appointmentDetails.time" label="Time"></v-text-field>
              <v-text-field v-model="appointmentDetails.type" label="Appointment Type"></v-text-field>
  
              <v-date-picker v-model="appointmentDetails.date" label="Select Date"></v-date-picker>
              <v-time-picker v-model="appointmentDetails.time" label="Select Time"></v-time-picker>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="closeAppointmentDialog">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="scheduleAppointment">Schedule</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';
  
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
          {
            name: 'John Doe',
            dateOfBirth: '1985-05-15',
            gender: 'Male',
            contactNumber: '+1234567890',
            emergencyContactDetails: 'Emergency Person - +1987654321',
            insuranceInformation: 'ABC Insurance Co.',
          },
          // Additional records...
        ],
        drawerItems: [
          { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
          { title: 'Appointment', icon: 'mdi-lock', route: 'Appointment' },
          { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
          { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
          { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
          { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
          { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
        ],
        editDialog: false,
        editedRecord: {},
        appointmentDialog: false,
        appointmentDetails: {},
      };
    },
  
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
  
      editRecord(record) {
        this.editDialog = true;
        this.editedRecord = { ...record };
      },
  
      closeEditDialog() {
        this.editDialog = false;
        this.$refs.editForm.reset();
      },
  
      saveEditedRecord() {
        console.log('Saving edited record:', this.editedRecord);
        this.editDialog = false;
        this.$refs.editForm.reset();
      },
  
      deleteRecord(record) {
        console.log('Delete record:', record);
      },
  
      openAppointmentForm(record) {
        this.appointmentDialog = true;
        this.appointmentDetails = {
          name: record.name,
          date: "",
          time: "",
          type: "",
        };
      },
  
      closeAppointmentDialog() {
        this.appointmentDialog = false;
        this.$refs.appointmentForm.reset();
      },
  
      scheduleAppointment() {
        console.log('Scheduling appointment:', this.appointmentDetails);
        this.appointmentDialog = false;
        this.$refs.appointmentForm.reset();
      },
    },
  };
  </script>
  
  <style scoped>
  /* ... existing styles ... */
  </style>
  