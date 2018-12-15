<template>
<div>
  <v-alert
    :value="supported"
    type="info"
    >Bluetooth is supported.</v-alert>
  <v-alert
    :value="error"
    type="error"
    >{{ error }}</v-alert>
  <v-alert
    :value="connected"
    type="success"
    >Connected.</v-alert>
  <v-container class="mt-3">
    <v-layout column>
      <v-flex d-flex xs12> 
        <v-btn
          :disabled="!supported"
          @click="go"
          block
          >
          GO
        </v-btn>
      </v-flex>
      <v-flex d-flex xs12> 
      <v-text-field
        :value="batteryLevel"
        :loading="loading"
        :prepend-icon="batteryIcon"
        label="Battery Level"
        readonly
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script src="./HelloWorld.js"></script>
