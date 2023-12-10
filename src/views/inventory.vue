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
   <!-- Header -->
   <v-row class="header-row">
      <v-col cols="12">
        <h1 class="display-2">Medication Inventory</h1>
      </v-col>
    </v-row>

    <!-- Medication Inventory Table -->
    <v-card flat>
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          single-line
          variant="outlined"
          hide-details
        ></v-text-field>
      </template>

      <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
    </v-card>

    <!-- Button to Add Medication -->
    <v-card-text>
      <v-btn color="success" @click="showAddForm">Add Medication</v-btn>
    </v-card-text>

    <!-- Update/Add Medication Form Dialog -->
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title v-if="isEdit">Update Medication</v-card-title>
        <v-card-title v-else>Add New Medication</v-card-title>
        <v-card-text>
          <v-form ref="medForm" v-model="valid">
            <v-text-field v-model="editedMedication.name" label="Medication Name"></v-text-field>
            <v-text-field v-model="editedMedication.quantity" label="Quantity Available"></v-text-field>
            <v-text-field v-model="editedMedication.expiry" label="Expiry Date"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" @click="saveMedication">Save</v-btn>
          <v-btn color="red darken-1" @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>

</template>

<script>
import axios from 'axios';

export default {
  name: 'InventoryPage',
  data() {
    return {
      drawer: false,
      drawerItems: [  // Include your drawer items
        { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
      ],
      isEdit: false,
      dialog: false,
      search: '',
      medications: [],
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Dessert (100g serving)',
        },
        { key: 'calories', title: 'Medication' },
        { key: 'fat', title: '' },
        { key: 'carbs', title: 'Carbs (g)' },
        { key: 'protein', title: 'Protein (g)' },
        { key: 'iron', title: 'Iron (%)' },
      ],
      desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
        ],
      editedMedication: {
        name: '',
        quantity: '',
        expiry: ''
      },
    };
  },

  created() {
    this.getInfo(); // Fetch data from the backend when the component is created
  },

  methods: {
    navigateTo(route) {
      this.$router.push(route);
      this.drawer = false;
    },
    getInfo() {
      // Fetch data from backend API
      axios.get('/getData')
        .then((response) => {
          this.medications = response.data; // Set received data to medications array
        })
        .catch((error) => {
          console.error('Error fetching medications:', error);
        });
    },
    editMedication(index) {
      this.isEdit = true;
      this.editedMedication = { ...this.medications[index] };
      this.dialog = true;
    },
    showAddForm() {
      this.isEdit = false;
      this.editedMedication = { name: '', quantity: '', expiry: '' };
      this.dialog = true;
    },
    saveMedication() {
      if (this.$refs.medForm.validate()) {
        if (this.isEdit) {
          const index = this.medications.findIndex(
            (medication) => medication.name === this.editedMedication.name
          );
          if (index !== -1) {
            axios.put(`/updateMedication/${this.medications[index].id}`, this.editedMedication)
              .then((response) => {
                console.log('Medication updated:', response.data);
                this.medications[index].name = response.data.MedicationName;
                this.medications[index].quantity = response.data.Quantity;
                this.medications[index].expiry = response.data.ExpiryData;
                this.closeDialog();
              })
              .catch((error) => {
                console.error('Error updating medication:', error);
              });
          }
        } else {
          // Add new medication
          // Implement API call to add new medication if required
          this.medications.push({ ...this.editedMedication });
          this.closeDialog();
        }
      }
    },
    deleteMedication(index) {
      // Implement API call to delete the medication if required
      this.medications.splice(index, 1);
    },
    closeDialog() {
      this.dialog = false;
      this.$refs.medForm.reset();
    },
  },
};
</script>



<style scoped>

</style>