import consts from './ActionTypes';

export function loadBible() {
  return ((dispatch, getState) => {
    const {
      selectedBook,
      selectedChapter
    } = getState().bibleIndexReducer;
    if (selectedBook && selectedChapter) {
      const bibleData = require(`../assets/bibles/ugnt/${selectedBook}/${selectedChapter}.json`);

      dispatch({
        type: consts.LOAD_BIBLE_DATA,
        bibleData
      })
    }
  })
}