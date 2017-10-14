import React from 'react';
import PropTypes from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';
import BibleNumberOfVersesInBookChapters from '../../assets/bibles/BibleNumberOfVersesInBookChapters'

const BibleChapterDropdown = ({
  selectedChapter,
  selectedBook,
  updateSelectedChapter
}) => {
  return (
    <div>
      <SelectField
        floatingLabelText="Chapter"
        value={selectedChapter}
        onChange={(event, index, value) => {
          updateSelectedChapter(value);
        }}
        disabled={selectedBook ? false : true}
        underlineStyle={{ borderColor: '#19579E' }}
        underlineDisabledStyle={{ borderColor: '#cd0033' }}
      >
      <MenuItem value={""} primaryText={""} />
      {
        selectedBook ? 
          Object.keys(BibleNumberOfVersesInBookChapters[selectedBook]).map((key, index) => {
            return (
              <MenuItem key={index} value={key} primaryText={key} />
            );
          })
        : null
      }
      </SelectField>
    </div>
  );
};

BibleChapterDropdown.propTypes = {
  selectedChapter: PropTypes.string.isRequired,
  updateSelectedChapter: PropTypes.func.isRequired
};

export default BibleChapterDropdown;