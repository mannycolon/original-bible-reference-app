import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const style = {
  display: 'flex',
  margin: '10px',
  width: '210px',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#FFFFFF',
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
}

class BibleAreaContainer extends Component {
  render () {
    const { bibleData } = this.props.resourcesReducer;
    const { selectedVerse } = this.props.bibleIndexReducer;

    return (
      <div style={{ display: 'flex', listStyle: 'none', height: '100%', backgroundColor: '#ffffff', flexFlow: 'row wrap', justifyContent: 'center' }}>
        {
          bibleData[selectedVerse] ? 
            bibleData[selectedVerse].map((wordObject, index) => {
              return (
                <div key={index} style={style}>
                  <table>
                    <tbody>
                      <tr>
                        <td><h2 style={{ color: '#19579E' }}>{wordObject.word}</h2></td>
                      </tr>
                      <tr>
                        <td><b>Strongs Number:</b></td>
                      </tr>
                      <tr>
                        <td>{wordObject.strong}</td>
                      </tr>
                      <tr>
                        <td><b>Brief:</b></td>
                      </tr>
                      <tr>
                        <td>{wordObject.brief}</td>
                      </tr>
                      <tr>
                        <td><b>long:</b></td>
                      </tr>
                      <tr>
                        <td>{wordObject.long}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })
          : null
        }
      </div>
    )
  }
}

BibleAreaContainer.propTypes = {
  resourcesReducer:	PropTypes.object.isRequired,
  bibleIndexReducer:	PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    bibleIndexReducer: state.bibleIndexReducer,
    resourcesReducer: state.resourcesReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BibleAreaContainer);
