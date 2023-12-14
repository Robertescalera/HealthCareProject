<template>
  <v-app>
    <v-container>
      <v-row class="header-row">
        <v-col class="text-right">
          <h1 class="display-2">USER APPOINTMENT</h1>
        </v-col>
      </v-row>

      <v-navigation-drawer app temporary v-model="drawer" class="top-left-drawer">
        <v-list>
          <v-list-item
            prepend-avatar="https://www.seekpng.com/png/detail/847-8474751_download-empty-profile.png"
            title="Lolo mo User"
            subtitle="LOLOmoUser@gmailcom"
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
        <v-app-bar-title class="header-title">NAUJAN HEALTH CARE CENTER</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn @click="navigateTo('/')">Logout</v-btn>
      </v-app-bar>
    </v-container>

    <v-container>
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
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-dialog v-model="editDialog" max-width="8000px" height="8000px">
        <v-card>
          <v-card-title>Edit Record</v-card-title>
          <v-card-text>
            <v-form ref="editForm">
              <v-row>
                <v-col cols="10" sm="6">
                  <v-text-field v-model="editedRecord.name" label="Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedRecord.date_birth" label="Date of Birth"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedRecord.gender" label="Gender"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="editedRecord.contact" label="Contact Number"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="editedRecord.EmergencyContactDetail" label="Emergency Contact"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="editedRecord.InsuranceInformation" label="Insurance Information"></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="closeEditDialog">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="saveEditedRecord">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-card>
        <v-card-title>Add New Record</v-card-title>
        <v-card-text>
          <v-form ref="addForm">
            <v-row>
              <v-col cols="10" sm="6">
                <v-text-field v-model="newRecord.name" label="Name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="newRecord.date_birth" label="Date of Birth"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="newRecord.gender" label="Gender"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="newRecord.contact" label="Contact Number"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newRecord.EmergencyContactDetail" label="Emergency Contact"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newRecord.InsuranceInformation" label="Insurance Information"></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="clearNewRecord">Clear</v-btn>
          <v-btn color="blue darken-1" text @click="saveNewRecord">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HealthRecords',
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
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Date of Birth', value: 'date_birth' },
        { text: 'Gender', value: 'gender' },
        { text: 'Contact Number', value: 'contact' },
        { text: 'Emergency Contact', value: 'EmergencyContactDetail' },
        { text: 'Insurance Information', value: 'InsuranceInformation' },
      ],
      records: [],
      newRecord: {
        id: null,
        name: '',
        date_birth: '',
        gender: '',
        contact: '',
        EmergencyContactDetail: '',
        InsuranceInformation: '',
      },
      editedRecord: {},
      editDialog: false,
    };
  },
  methods: {
    clearNewRecord() {
      this.newRecord = {
        id: null,
        name: '',
        date_birth: '',
        gender: '',
        contact: '',
        EmergencyContactDetail: '',
        InsuranceInformation: '',
      };
      this.$refs.addForm.reset();
    },
    saveNewRecord() {
      this.loading = true;
      axios.post('api/addRecord', this.newRecord)
        .then(response => {
          console.log('Record saved successfully:', response.data);
          this.showSnackbar('Record saved successfully', 'success');
          this.clearNewRecord();
          this.fetchRecords();
        })
        .catch(error => {
          console.error('Error saving record:', error);
          this.showSnackbar('Error saving record', 'error');
        })
        .finally(() => {
          this.loading = false;
        });
    },
    fetchRecords() {
      this.loading = true;
      axios.get('api/getInfoData')
        .then(response => {
          this.records = response.data;
        })
        .catch(error => {
          console.error('Error fetching records:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    editRecord(item) {
      this.editedRecord = { ...item };
      this.editDialog = true;
    },
    closeEditDialog() {
      this.editDialog = false;
      this.editedRecord = {};
    },
    saveEditedRecord() {
      this.loading = true;
      axios.put(`api/updateRecord/${this.editedRecord.id}`, this.editedRecord)
        .then(response => {
          console.log('Record updated successfully:', response.data);
          this.showSnackbar('Record updated successfully', 'success');
          this.editDialog = false;
          this.editedRecord = {};
          this.fetchRecords();
        })
        .catch(error => {
          console.error('Error updating record:', error);
          this.showSnackbar('Error updating record', 'error');
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteRecord(item) {
      // Implement the logic to delete the record
      // Make a request to your CodeIgniter 4 backend to delete the record
      // Fetch updated records after successful deletion
      this.fetchRecords();
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    showSnackbar(message, color) {
      this.snackbarMessage = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
  created() {
    this.fetchRecords();
  },
};
</script>

<style scoped>
.header-row {
  margin-bottom: 20px;
  text-align: right;
  font-size: 10px;
}
.headerr-row {
  margin-bottom: 20px;
  text-align: right;
  font-size: 15px;
  font-weight: bold;
}
</style>
