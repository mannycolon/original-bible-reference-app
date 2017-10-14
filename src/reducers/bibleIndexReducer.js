import consts from '../actions/ActionTypes';

const initialState = {
  selectedBook: '',
  selectedChapter: '',
  selectedVerse: ''
}

const bibleIndexReducer = (state = initialState, action) => {
  switch (action.type) {
    case consts.UPDATE_SELECTED_BOOK:
      return {
        ...state,
        selectedBook: action.selectedBook
      }
    case consts.UPDATE_SELECTED_CHAPTER:
      return {
        ...state,
        selectedChapter: action.selectedChapter
      }
    case consts.UPDATE_SELECTED_VERSE:
      return {
        ...state,
        selectedVerse: action.selectedVerse
      }
    default:
      return state
  }
}

export default bibleIndexReducer;
