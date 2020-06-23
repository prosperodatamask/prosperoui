/**
 * Set the headers
 * @param {Object[]} headers The headers
 * @returns {Object} The action
 */
export function setHeaders(headers) {
  return {
    type: window.api.types.HEADERS_LOADED,
    payload: headers
  };
}