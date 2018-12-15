<template>
<v-app>
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <span>Try Bluetooth</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      href="https://github.com/kayhide/try-bluetooth"
      target="_blank"
      class="mr-2"
      flat icon
      >
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
