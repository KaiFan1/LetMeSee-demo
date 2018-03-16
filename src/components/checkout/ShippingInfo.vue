<template>
  <v-form>
    <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-container>
        <v-text-field label="First Name" v-model="firstname" :rules="nameRules" required></v-text-field>
      </v-container>
    </v-flex>
    <v-flex xs12 sm6>
      <v-container>
        <v-text-field label="Last Name" v-model="lastname" :rules="nameRules" required></v-text-field>
      </v-container>
    </v-flex>
    <v-flex xs12 sm9>
      <v-container>
        <v-text-field label="Shipping Address" v-model="shippingaddress" required></v-text-field>
      </v-container>
    </v-flex>
    <v-flex xs12 sm3>
      <v-container>
        <v-text-field label="Apt" v-model="apt"></v-text-field>
      </v-container>
    </v-flex>
    <v-flex xs12 sm12>
      <v-container>
        <v-text-field label="City"></v-text-field>
      </v-container>
    </v-flex>
    <v-flex xs4 sm4>
      <v-container>
        <v-select label="State/Province" autocomplete ></v-select>
      </v-container>
    </v-flex>    
    <v-flex xs4 sm4>
      <v-container>
        <v-select label="Country" autocomplete ></v-select>
      </v-container>
    </v-flex>    
    <v-flex xs4 sm4>
      <v-container>
        <v-text-field label="Zip Code" v-model="zipcode "></v-text-field>
      </v-container>
    </v-flex>
    </v-layout>
  </v-form>
</template>

<script>

</script>