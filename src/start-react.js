const net = require('net');
const childProcess = require('child_process');

const port = process.env.PORT ? process.env.PORT - 100 : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;

/**
 * Try to start electron
 * @returns {undefined}
 */
const tryConnection = function () {
  client.connect({
    port
  }, function () {
    client.end();
    if (!startedElectron) {
      console.log('starting electron');
      startedElectron = true;
      const exec = childProcess.exec;
      exec('npm run electron');
    }
  });
};

tryConnection();

client.on('error', function () {
  setTimeout(tryConnection, 1000);
});