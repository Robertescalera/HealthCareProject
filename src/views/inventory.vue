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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(medication, index) in medications" :key="index">
                <td>{{ medication.MedicationName }}</td>
                <td>{{ medication.Quantity }}</td>
                <td>{{ medication.ExpiryData }}</td>
                <td>
                  <v-btn color="primary" @click="editMedication(index)">Update</v-btn>
                  <v-btn color="error" @click="deleteMedication(index)">Delete</v-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Button to Add Medication -->
        <v-btn color="success" @click="showAddForm">Add Medication</v-btn>
      </v-card-text>
    </v-card>

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
      drawerItems: [
        { title: 'Dashboard', icon: 'mdi-account', route: 'adminpanel' },
        { title: 'Analytics', icon: 'mdi-lock', route: 'analytic' },
        { title: 'Health Records', icon: 'mdi-access-point', route: 'HealthRecords' },
        { title: 'Survey', icon: 'mdi-access-point', route: 'survey' },
        { title: 'Inventory', icon: 'mdi-access-point', route: 'inventory' },
        { title: 'Barangay', icon: 'mdi-access-point', route: 'barangay' },
        { title: 'Announcement', icon: 'mdi-access-point', route: 'announcement' },
      ],
      medications: [], // Array to hold medication data fetched from the backend
      dialog: false,
      isEdit: false,
      valid: false,
      editedMedication: {
        MedicationName: '',
        Quantity: '',
        ExpiryData: '',
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
      axios.get('/getData') // Use the Axios base URL + '/getData'
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
      this.editedMedication = { MedicationName: '', Quantity: '', ExpiryData: '' };
      this.dialog = true;
    },
    saveMedication() {
      if (this.$refs.medForm.validate()) {
        if (this.isEdit) {
          // Update existing medication
          const index = this.medications.findIndex(
            (medication) => medication.name === this.editedMedication.name
          );
          if (index !== -1) {
            // Call API to update the medication
            axios.put(`/updateMedication/${this.medications[index].id}`, this.editedMedication)
              .then((response) => {
                // Update local data or perform other actions as needed
                console.log('Medication updated:', response.data);

                // Update specific properties of the medication object
                this.medications[index].name = response.data.MedicationName;
                this.medications[index].quantity = response.data.Quantity;
                this.medications[index].expiry = response.data.ExpiryData;

                // Close dialog after successful update
                this.closeDialog();
              })
              .catch((error) => {
                console.error('Error updating medication:', error);
              });
          }
        } else {
          // Add new medication
          // Call API to add the new medication (if required)
          // Note: Implement API call to add new medication
          this.medications.push({ ...this.editedMedication });
          this.closeDialog();
        }
      }
    },
    deleteMedication(index) {
      // Call API to delete the medication (if required)
      // Note: Implement API call to delete medication
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
/* Add any additional styling as needed */
.header-row {
    margin-bottom: 20px;
    text-align: right;
    font-size: 10px;
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