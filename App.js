import React from 'react';
import {SafeAreaView} from 'react-native';
import Route from './source/router';
import AppStyle from './source/theme/commonStyle';

const App = () => {
  console.disableYellowBox = true;
  return (
    <SafeAreaView style={AppStyle.rootContainer}>
      <Route />
    </SafeAreaView>
  );
};

export default App;
