import React from 'react';
import PropTypes from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';
import BooksOfTheBible from '../../assets/bibles/BooksOfTheBibleByOtAndNt'

const BookDropdownMenu = ({
  selectedBook,
  updateSelectedBook
}) => {
  return (
    <div>
      <SelectField
        floatingLabelText="Book"
        value={selectedBook}
        onChange={(event, index, value) => {
          updateSelectedBook(value);
        }}
        underlineStyle={{ borderColor: '#19579E' }}
      >
      <MenuItem value={""} primaryText={""} />
      {
        Object.keys(BooksOfTheBible.newTestament).map((key, index) => {
          const BookName = BooksOfTheBible.newTestament[key];
          return (
            <MenuItem key={index} value={key} primaryText={BookName} />
          );
        })
      }
      </SelectField>
    </div>
  );
};

BookDropdownMenu.propTypes = {
  selectedBook: PropTypes.string.isRequired,
  updateSelectedBook: PropTypes.func.isRequired
};

export default BookDropdownMenu;