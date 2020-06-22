const {
  contextBridge,
  ipcRenderer
} = require('electron');

const constants = require('./constants');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'api', {
    types: constants,
    request: (channel, data) => {
      // whitelist channels
      if (Object.values(constants.REQUESTS).includes(channel)) {
        ipcRenderer.send(channel, data);
      } else {
        throw new Error('Unknown request type');
      }
    },
    response: (channel, func) => {
      if (Object.values(constants.RESPONSES).includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      } else {
        throw new Error('Unknown response type');
      }
    }
  }
);