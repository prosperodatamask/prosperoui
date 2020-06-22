const {
  Menu
} = require('electron');

const menuTemplate = [
  {
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
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Open File'
      },
      {
        label: 'Save Masked Data'
      }
    ]
  },
  {
    label: 'Settings',
    submenu: [
      {
        label: 'Open Mask Settings'
      },
      {
        label: 'Save Mask Settings'
      }
    ]
  }
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