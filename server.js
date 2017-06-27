'use strict';
 
const ttnazureiot = require('ttn-azure-iothub');
 
// Replace with your AppEUI and App Access Key 
const appEUI = '70BXXXXXXX1C3';
const appAccessKey = 'GIq0XXXXXXXXXXXXXXmOLM=';
 
// Replace with your Azure IoT Hub name and key 
const hubName = 'ttn';
const keyName = 'iothubowner';
const key = '7OsoGvsaHXXXXXXXXXXXXXXXXXXLjMbsg=';
 
const bridge = new ttnazureiot.Bridge(appEUI, appAccessKey, hubName, keyName, key);
 
bridge.on('ttn-connect', () => {
  console.log('TTN connected');
});
 
bridge.on('error', err => {
  console.warn('Error', err);
});
 
bridge.on('uplink', data => {
  console.log('Uplink', data);
});