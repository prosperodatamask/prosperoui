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
 * The copy transform
 */
class CopyTransform {
  label = 'Copy';
}

/**
 * Converts the header array into a complex object
 * @param {String[]} headers The headers
 * @returns {Object[]} The headers with the default transformer
 */
function setDefaultTransform(headers) {
  let output = [];

  headers.forEach(function (header) {
    output.push({
      label: header,
      transform: new CopyTransform()
    });
  });

  return output;
}

/**
 * Loads the file from disk
 * @param {Object} mainWindow The main window
 * @param {Object} event The event
 * @param {String} file_path The file path
 * @returns {undefined}
 */
function loadFile(mainWindow, event, file_path) {
  const error = errorHandler.bind(undefined, mainWindow);
  fs.createReadStream(file_path)
    .pipe(csv())
    .on('headers', function (headers) {
      mainWindow.webContents.send(constants.HEADERS_LOADED, setDefaultTransform(headers));
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