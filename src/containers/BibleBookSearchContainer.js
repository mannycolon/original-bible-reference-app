import React from 'react';
import { connect } from 'react-redux'
// components
import BibleBookDropdown from '../components/bibleBookSearch/BibleBookDropdown';
import BibleChapterDropdown from '../components/bibleBookSearch/BibleChapterDropdown';
import BibleVerseDropdown from '../components/bibleBookSearch/BibleVerseDropdown'
// actions
import * as BibleIndexActions from '../actions/BibleIndexActions'

class BibleBookSearchContainer extends React.Component {
  render() {
    const {
      selectedBook,
      selectedChapter,
      selectedVerse
    } = this.props.bibleIndexReducer;

    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <BibleBookDropdown
          selectedBook={selectedBook}
          updateSelectedBook={(book) => this.props.updateSelectedBook(book)}
        />
        <BibleChapterDropdown
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
          updateSelectedChapter={(chapter) => this.props.updateSelectedChapter(chapter)}
        />
        <BibleVerseDropdown
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
          selectedVerse={selectedVerse}
          updateSelectedVerse={(verse) => this.props.updateSelectedVerse(verse)}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    bibleIndexReducer: state.bibleIndexReducer,
    resourcesReducer: state.resourcesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedBook: (selectedBook) => {
      dispatch(BibleIndexActions.updateSelectedBook(selectedBook));
    },
    updateSelectedChapter: (selectedChapter) => {
      dispatch(BibleIndexActions.updateSelectedChapter(selectedChapter));
    },
    updateSelectedVerse: (selectedVerse) => {
      dispatch(BibleIndexActions.updateSelectedVerse(selectedVerse));
    }
  }
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BibleBookSearchContainer);