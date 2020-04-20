import React from 'react';
import {connect} from 'react-redux';
import FirstTestStackNavigator from './test-1/FirstTestStackNavigator';
import SecondTestNavigator from './test-2/SecondTestNavigator';

const LevelOneWrapper = ({progress, user}) => {
  if (progress.test === 1) {
    return <FirstTestStackNavigator />;
  } else if (progress.test === 2) {
    return <SecondTestNavigator />;
  }
};

const mapStateToProps = state => ({
  user: state.userReducer,
  progress: state.progressReducer,
});

export default connect(
  mapStateToProps,
  null,
)(LevelOneWrapper);
