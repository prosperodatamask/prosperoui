const {
  ipcMain
} = require('electron');

const constants = require('./constants');

const fs = require('fs');
const csv = require('csv-parser');

/**
 * Redirects errors back to the main window
 * @param {Object} mainWindow The main window
 * @param {Error} error The error
 * @returns {undefined}
 */
function errorHandler(mainWindow, error) {
  mainWindow.webContents.send('ERROR', error);
}

/**
 * Loads the file from disk
 * @param {Object} mainWindow The main window
 * @param {Object} event The event
 * @param {Object} file_path The file path
 * @returns {undefined}
 */
function loadFile(mainWindow, event, file_path) {
  const error = errorHandler.bind(undefined, mainWindow);
  fs.createReadStream(file_path)
    .pipe(csv())
    .on('headers', function (headers) {
      mainWindow.webContents.send(constants.HEADERS_LOADED, headers);
    })
    .on('error', error);
}

/**
 * Set up all the handlers
 * @param {Object} mainWindow The main window
 * @return {undefined}
 */
function handlers(mainWindow) {
  ipcMain.on(constants.FILE_OPEN, loadFile.bind(undefined, mainWindow));
}

module.exports = {
  handlers: handlers
};