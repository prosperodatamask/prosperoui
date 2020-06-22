const {
  app,
  BrowserWindow,
  protocol
} = require('electron');

const path = require('path');
const url = require('url');

const electron_menu = require('./electron/menu');

let mainWindow;

/**
 * Creates the window
 * @returns {undefined}
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Prospero',
    webPreferences: {
      nodeIntegration: true
    }
  });

  electron_menu.setMenu();

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
        url.format({
          //pathname: path.join(__dirname, '../build/index.html'),
          pathname: 'index.html',
          protocol: 'file:',
          slashes: true
        })
  );

  mainWindow.maximize();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  protocol.interceptFileProtocol('file', function (request, callback) {
    const url = request.url.substr(7);
    callback({
      path: path.normalize(`${__dirname}/${url}`)
    });
  }, function (err) {
    if (err) {
      console.error('Failed to register protocol');
    }
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});