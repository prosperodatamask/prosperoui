const {
  Menu
} = require('electron');

const isDev = require('electron-is-dev');

const constants = require('./constants');

const appMenu = {
  label: 'Prospero',
  role: 'appMenu',
  submenu: [
    {
      role: 'hide'
    },
    {
      role: 'separator'
    },
    {
      role: 'quit'
    }
  ]
};

/**
 * Gets the file menu entry
 * @param {Object} mainWindow The main window
 * @returns {Object} The file entry
 */
function getFileEntry(mainWindow) {
  return {
    label: 'File',
    submenu: [
      {
        label: 'Open File',
        accelerator: 'CmdOrCtrl+O',
        /**
         * Click handler
         * @returns {undefined}
         */
        click() {
          mainWindow.webContents.send(constants.FILE_OPEN_REQUESTED);
        }
      },
      {
        label: 'Save Masked Data'
      }
    ]
  };
}

const settings = {
  label: 'Settings',
  submenu: [
    {
      label: 'Open Mask Settings'
    },
    {
      label: 'Save Mask Settings'
    }
  ]
};

const tools = {
  label: 'Tools',
  visible: isDev,
  submenu: [
    {
      role: 'toggleDevTools'
    }
  ]
};

/**
 * Sets the application menu
 * @param {Object} mainWindow The main window
 * @returns {undefined}
 */
function setMenu(mainWindow) {
  const menuTemplate = [
    appMenu,
    getFileEntry(mainWindow),
    settings,
    tools
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(menu);
}

module.exports = {
  setMenu: setMenu
};