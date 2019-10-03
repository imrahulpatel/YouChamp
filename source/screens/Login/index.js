import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Image, Text} from 'react-native';
import LoginStyle from './style';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/FloatableEditText';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {Actions} from 'react-native-router-flux';
import {NAVIGATION} from '../../constant';
import CountryPicker from '../../components/CountryPicker';

const labels = [
  'AFGHANISTAN',
  'AUSTRALIA',
  'ALBANIA',
  'ALGARIA',
  'ARGENTINA',
  'BAHRAIN',
  'CANADA',
  'CHINA',
  'DENMARK',
  'FRANCE',
];

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }
  redirectSignup = () => {
    Actions.push(NAVIGATION.SIGNUP);
  };

  redirectForgotPassword = () => {
    Actions.push(NAVIGATION.FORGOTPASS);
  };

  render() {
    return (
      <View style={LoginStyle.rootContainer}>
        <ScrollView contentContainerStyle={LoginStyle.scrollViewContainer}>
          <Image
            source={Images.Hexagonal}
            resizeMode="stretch"
            style={LoginStyle.hexagonal_backgroud}
          />
          <Image
            source={Images.Ribbins}
            resizeMode="contain"
            style={LoginStyle.ribbins_backgroud}
          />
          <View style={LoginStyle.subrootContainer}>
            <Image
              source={Images.AppLogo}
              resizeMode="contain"
              style={LoginStyle.logo_champ}
            />
            <Text style={LoginStyle.logo_text}>youchamp</Text>

            <View style={LoginStyle.login_share_container}>
              <Text style={LoginStyle.login_share_text}>LOG IN TO SHARE</Text>
              <Text style={LoginStyle.login_sub_share_text}>
                Please select your country code from the list
              </Text>
              <View style={LoginStyle.login_share_sub_container}>
                <Text style={LoginStyle.login_sub_share_text}>
                  and enter your details to
                </Text>
                <Text style={LoginStyle.hyperlink_text}>Log In!</Text>
              </View>
            </View>
            <View style={LoginStyle.form_container}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.refs.picker2.show()}>
                <CustomInput
                  floatbletext={'SELECT YOUR COUNTRY'}
                  floatbletextStyle={LoginStyle.floatable_text}
                  containerStyle={LoginStyle.inputContainer}
                  editable={false}
                  showDropArrow={true}
                  inputStyle={LoginStyle.inputStyle}
                  placeholderText={'AUSTRALIA'}
                  value={this.state.selectedOption}
                  placeholderTextColor={Colors.inputPlaceholderColor}
                />
              </TouchableOpacity>
              <CustomInput
                floatbletext={'YOUR PHONE NUMBER'}
                floatbletextStyle={LoginStyle.floatable_text}
                containerStyle={LoginStyle.inputContainer}
                editable={true}
                keyboardType={'number-pad'}
                inputStyle={LoginStyle.inputStyle}
                placeholderText={'+61 0000 000 000'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <CustomInput
                floatbletext={'YOUR PASSWORD'}
                floatbletextStyle={LoginStyle.floatable_text}
                containerStyle={LoginStyle.inputContainer}
                editable={true}
                secureTextEntry={true}
                inputStyle={LoginStyle.inputStyle}
                placeholderText={'********'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <View style={LoginStyle.form_button_container}>
                <CustomButton
                  buttonText={'Log In'}
                  activeOpacity={0.8}
                  onClick={() => this.redirectSignup()}
                  containerStyle={LoginStyle.login_button_container}
                  textStyle={LoginStyle.login_text}
                />
                <View style={LoginStyle.forgot_pass_row_Container}>
                  <View style={LoginStyle.login_share_sub_container}>
                    <Text style={LoginStyle.note_black_text}>Forgot your</Text>
                    <TouchableOpacity
                      onPress={() => this.redirectForgotPassword()}>
                      <Text style={LoginStyle.hyperlink_text}>Password?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={LoginStyle.signup_row_Container}>
                  <View style={LoginStyle.login_share_sub_container}>
                    <TouchableOpacity onPress={() => this.redirectSignup()}>
                      <Text style={LoginStyle.hyperlink_text}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={LoginStyle.note_black_text}>
                      now and start sharing
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <CountryPicker
              ref={'picker2'}
              options={labels}
              labels={labels}
              confirmText={'Done'}
              itemStyle={LoginStyle.country_list_item}
              cancelTextStyle={LoginStyle.cancel_button}
              confirmTextStyle={LoginStyle.done_button}
              onSubmit={option => {
                this.setState({
                  selectedOption: option,
                });
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
