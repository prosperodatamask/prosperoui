const initialState = {
  headers: []
};

/**
 * Reduce the state
 * @param {Object} state The state
 * @param {Object} action The action
 * @return {Object} The new state
 */
function rootReducer(state = initialState, action) {
  Object.freeze(state);

  switch(action.type) {
    case window.api.types.HEADERS_LOADED:
      return {
        ...state,
        headers: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;