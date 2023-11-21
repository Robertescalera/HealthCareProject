<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@2.5.17/dist/vuetify.min.css">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.5.17/dist/vuetify.js"></script>
  <style type="text/css">
    #inputbtn:hover {cursor:pointer;}
  </style>
</head>
<body>

<div id="app">
  <v-app>
    <v-app-bar app color="primary" fixed>
      <v-container>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>HEALTH CARE CENTER</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="logout">
          <v-icon>mdi-power</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-list dense>
        <v-list-item-group v-if="isLoggedIn">
          <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigateTo(item.route)">
            <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-container>
      <v-row>
        <v-col cols="4">
          <v-list-item-group v-if="isLoggedIn">
            <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigateTo(item.route)">
              <v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-col>

        <v-col cols="8">
          <v-tab-item v-if="currentTab === 'Appointment'">
            <v-container>
              <v-card>
                <v-card-title class="text-h5">Create an appointment</v-card-title>
                <v-form>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field label="First Name" v-model="formData.fname"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Last Name" v-model="formData.lname"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Email" v-model="formData.email"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field label="Contact Number" v-model="formData.contact"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select label="Doctor" v-model="formData.doctor" :items="doctorOptions"></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select label="Payment" v-model="formData.payment" :items="paymentOptions"></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-btn @click.prevent="createAppointment" color="primary">Create new entry</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card>
            </v-container>
          </v-tab-item>
          <!-- Add other tab items as needed -->

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</div>

<script>
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      drawer: false,
      isLoggedIn: true,
      currentTab: 'Appointment',
      formData: {
        fname: '',
        lname: '',
        email: '',
        contact: '',
        doctor: null,
        payment: null,
      },
      doctorOptions: ['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Bob Johnson'],
      paymentOptions: ['Paid', 'Pay later'],
      menuItems: [
        { title: 'Appointment', icon: 'mdi-calendar', route: 'appointment' },
        { title: 'Patient List', icon: 'mdi-account-group', route: 'patient-list' },
        { title: 'Payment Status', icon: 'mdi-currency-usd', route: 'payment-status' },
        { title: 'Prescription', icon: 'mdi-file-document', route: 'prescription' },
        { title: 'Doctors Section', icon: 'mdi-account-heart', route: 'doctors-section' },
        { title: 'Attendance', icon: 'mdi-account-clock', route: 'attendance' },
      ],
    };
  },
  methods: {
    navigateTo(route) {
      this.currentTab = route;
    },
    logout() {
      // Add logout logic here
    },
    createAppointment() {
      // Add logic to handle appointment creation
      console.log('Creating appointment:', this.formData);
    },
  },
});
</script>

</body>
</html>
