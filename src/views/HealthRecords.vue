<template>
  <v-app>
    <v-container>
    
    <v-navigation-drawer app temporary v-model="drawer" class="top-left-drawer">
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

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="header-title">
        NAUJAN HEALTH CARE CENTER
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="navigateTo('/')">Logout</v-btn>
    </v-app-bar>

    <v-row class="header-row">
      <v-col class="text-right">
        <h1 class="display-2">HEALTH CARE RECORD</h1>
      </v-col>
    </v-row>
    <v-row class="header-row">
      <v-col class="text-right">
        <h1 class="display-2">HEALTH CARE RECORD</h1>
      </v-col>
    </v-row>

    </v-container>

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
    
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>Edit Record</v-card-title>
        <v-card-text>
          <v-form ref="editForm">
            <v-text-field v-model="editedRecord.name" label="Name"></v-text-field>
            <v-text-field v-model="editedRecord.dateOfBirth" label="Date of Birth"></v-text-field>
            <v-text-field v-model="editedRecord.gender" label="Gender"></v-text-field>
            <v-text-field v-model="editedRecord.contactNumber" label="Disease"></v-text-field>
            <v-text-field v-model="editedRecord.emergencyContactDetails" label="Days"></v-text-field>
            <v-text-field v-model="editedRecord.insuranceInformation" label=""></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="closeEditDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="saveEditedRecord">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
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
        { text: 'disease', value: 'disease' },
        { text: 'days', value: 'days' },
      ],
      records: [
        {
          name: 'John Doe',
          dateOfBirth: '1985-05-15',
          gender: 'Male',
          disease: 'cancer',
          days: '3-4 days',
        },
        {
          name: 'John Doe',
          dateOfBirth: '1985-05-15',
          gender: 'Male',
          disease: 'cancer',
          days: '3-4 days',
        },
        {
          name: 'John Doe',
          dateOfBirth: '1985-05-15',
          gender: 'Male',
          disease: 'cancer',
          days: '3-4 days',
        },
        {
          name: 'John Doe',
          dateOfBirth: '1985-05-15',
          gender: 'Male',
          disease: 'cancer',
          days: '3-4 days',
        },
      ],
      drawerItems: [
      { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
      ],
      editDialog: false,
      editedRecord: {},
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
