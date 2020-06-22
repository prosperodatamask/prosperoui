const {
  Menu
} = require('electron');

const isDev = require('electron-is-dev');

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

const file = {
  label: 'File',
  submenu: [
    {
      label: 'Open File'
    },
    {
      label: 'Save Masked Data'
    }
  ]
};

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

const menuTemplate = [
  appMenu,
  file,
  settings,
  tools
];

/**
 * Sets the application menu
 * @returns {undefined}
 */
function setMenu() {
  const menu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(menu);
}

module.exports = {
  setMenu: setMenu
};