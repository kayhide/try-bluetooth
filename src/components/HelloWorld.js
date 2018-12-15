export default {
  data: () => ({
    supported: !!navigator.bluetooth,
    loading: false,
    found: false,
    connected: false,
    error: null,
    batteryLevel: null
  }),

  computed: {
    batteryIcon() {
      return (this.batteryLevel === null) ? "battery_unknown" : "battery_full";
    }
  },

  methods: {
    go() {
      navigator.bluetooth.requestDevice({
        filters: [{
          services: ['battery_service']
        }]
      }).then(device => {
        this.error = null;
        this.found = true;
        return device.gatt.connect();
      }).then(server => {
        this.connected = true;
        this.loading = true;
        return server.getPrimaryService('battery_service');
      }).then(service => {
        return service.getCharacteristic('battery_level');
      }).then(characteristic => {
        return characteristic.readValue();
      }).then(value => {
        this.loading = false;
        this.batteryLevel = value.getUint8(0);
      }).catch(error => {
        this.error = error;
      });
    }
  }
};
