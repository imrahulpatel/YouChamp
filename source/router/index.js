import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/Signup';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import {NAVIGATION} from '../constant';

const Route = () => (
  // Define the route for screens
  <Router>
    <Scene key={NAVIGATION.ROOT}>
      <Scene key={NAVIGATION.LOGIN} component={LoginScreen} hideNavBar />
      <Scene key={NAVIGATION.SIGNUP} component={SignUpScreen} hideNavBar />
      <Scene
        key={NAVIGATION.FORGOTPASS}
        component={ForgotPasswordScreen}
        hideNavBar
      />
    </Scene>
  </Router>
);

export default Route;
