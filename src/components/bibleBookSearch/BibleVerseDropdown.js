import React from 'react';
import PropTypes from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';
import BibleNumberOfVersesInBookChapters from '../../assets/bibles/BibleNumberOfVersesInBookChapters'

const BibleVerseDropdown = ({
  selectedBook,
  selectedChapter,
  selectedVerse,
  updateSelectedVerse
}) => {
  let verses = [];
  if (selectedBook.length > 0) {
    let limit = BibleNumberOfVersesInBookChapters[selectedBook][selectedChapter];
    for (let a = [], i = 0, value = 1; i < limit; ++i) {
      a[i] = value;
      verses = a;
      ++value;
    }
  }

  return (
    <div>
      <SelectField
        floatingLabelText="Verse"
        value={selectedVerse}
        onChange={(event, index, value) => {
          updateSelectedVerse(value);
        }}
        disabled={selectedChapter ? false : true}
        underlineStyle={{ borderColor: '#19579E' }}
        underlineDisabledStyle={{ borderColor: '#cd0033' }}
      >
      <MenuItem value={""} primaryText={""} />
      {
        selectedChapter ?
          Object.keys(verses).map((key, index) => {
            let verseNumber = verses[key];
            return (
              <MenuItem key={verseNumber} value={verseNumber} primaryText={verseNumber} />
            );
          })
        : null
      }
      </SelectField>
    </div>
  );
};

BibleVerseDropdown.propTypes = {
  selectedVerse: PropTypes.any.isRequired,
  updateSelectedVerse: PropTypes.func.isRequired
};

export default BibleVerseDropdown;