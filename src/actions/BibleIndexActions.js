import consts from './ActionTypes'
// actions
import * as ResourcesActions from './ResourcesActions';

export function updateSelectedBook(selectedBook) {
  return ((dispatch, getState) => {
    dispatch({
      type: consts.UPDATE_SELECTED_BOOK,
      selectedBook // Same as selectedBook: selectedBook
    });

    dispatch(ResourcesActions.loadBible())
  });
}

export function updateSelectedChapter(selectedChapter) {
  return ((dispatch, getState) => {
    dispatch({
      type: consts.UPDATE_SELECTED_CHAPTER,
      selectedChapter
    });

    dispatch(ResourcesActions.loadBible())
  });
}

export function updateSelectedVerse(selectedVerse) {
  return ((dispatch, getState) => {
    dispatch({
      type: consts.UPDATE_SELECTED_VERSE,
      selectedVerse
    })
    dispatch(ResourcesActions.loadBible())
  })
}
