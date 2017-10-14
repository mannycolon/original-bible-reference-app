import consts from '../actions/ActionTypes';

const initialState = {
  bibleData: {}
}

const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.LOAD_BIBLE_DATA:
      return {
        ...state,
        bibleData: action.bibleData
      }
    default:
      return state
  }
}

export default resourcesReducer;
