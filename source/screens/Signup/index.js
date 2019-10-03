import React, {Component} from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import SignupStyle from './style';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/FloatableEditText';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import {Actions} from 'react-native-router-flux';
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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

  redirectSignIn() {
    Actions.pop();
  }

  render() {
    return (
      <View style={SignupStyle.rootContainer}>
        <ScrollView contentContainerStyle={SignupStyle.scrollViewContainer}>
          <Image
            source={Images.Hexagonal}
            resizeMode="stretch"
            style={SignupStyle.hexagonal_backgroud}
          />
          <Image
            source={Images.Ribbins}
            resizeMode="contain"
            style={SignupStyle.ribbins_backgroud}
          />
          <View style={SignupStyle.subrootContainer}>
            <Image
              source={Images.AppLogo}
              resizeMode="contain"
              style={SignupStyle.logo_champ}
            />
            <View style={SignupStyle.signup_share_container}>
              <Text style={SignupStyle.signup_text}>SIGN UP</Text>
              <Text style={SignupStyle.sign_sub_share_text}>
                Please select your country code from the list
              </Text>
              <View style={SignupStyle.signup_share_sub_container}>
                <Text style={SignupStyle.sign_sub_share_text}>
                  and enter your details to
                </Text>
                <Text style={SignupStyle.hyperlink_text}>Sign Up!</Text>
              </View>
            </View>
            <View style={SignupStyle.form_container}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.refs.picker2.show()}>
                <CustomInput
                  floatbletext={'SELECT YOUR COUNTRY'}
                  floatbletextStyle={SignupStyle.floatable_text}
                  containerStyle={SignupStyle.inputContainer}
                  editable={false}
                  showDropArrow={true}
                  inputStyle={SignupStyle.inputStyle}
                  placeholderText={'AUSTRALIA'}
                  value={this.state.selectedOption}
                  placeholderTextColor={Colors.inputPlaceholderColor}
                />
              </TouchableOpacity>
              <CustomInput
                floatbletext={'YOUR PHONE NUMBER'}
                floatbletextStyle={SignupStyle.floatable_text}
                containerStyle={SignupStyle.inputContainer}
                editable={true}
                keyboardType={'phone-pad'}
                inputStyle={SignupStyle.inputStyle}
                placeholderText={'+61 0000 000 000'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <CustomInput
                floatbletext={'YOUR NAME'}
                floatbletextStyle={SignupStyle.floatable_text}
                containerStyle={SignupStyle.inputContainer}
                editable={true}
                inputStyle={SignupStyle.inputStyle}
                placeholderText={'Who are you'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <CustomInput
                floatbletext={'YOUR EMAIL'}
                floatbletextStyle={SignupStyle.floatable_text}
                containerStyle={SignupStyle.inputContainer}
                editable={true}
                keyboardType={'email-address'}
                inputStyle={SignupStyle.inputStyle}
                placeholderText={'sample@gmail.com'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <CustomInput
                floatbletext={'YOUR PASSWORD'}
                floatbletextStyle={SignupStyle.floatable_text}
                containerStyle={SignupStyle.inputContainer}
                editable={true}
                secureTextEntry={true}
                inputStyle={SignupStyle.inputStyle}
                placeholderText={'********'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <CustomInput
                floatbletext={'RESET PASSWORD'}
                floatbletextStyle={SignupStyle.floatable_text}
                containerStyle={SignupStyle.inputContainer}
                editable={true}
                secureTextEntry={true}
                inputStyle={SignupStyle.inputStyle}
                placeholderText={'********'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <Text style={SignupStyle.referal_code_text}>
                {
                  'Enter the name or referral code of the person\nwho suggested you join youchamp'
                }
              </Text>
              <CustomInput
                floatbletext={''}
                floatbletextStyle={SignupStyle.floatable_text}
                containerStyle={SignupStyle.inputContainer}
                editable={true}
                inputStyle={SignupStyle.inputStyle}
                placeholderText={'Who is your company'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <View style={SignupStyle.terms_condition_Container}>
                <Image
                  source={Images.TermsCondition}
                  resizeMode="contain"
                  style={SignupStyle.logo_termscondition}
                />
                <Text style={SignupStyle.note_black_text}>
                  You accept our Terms and Conditions
                </Text>
              </View>
              <View style={SignupStyle.form_button_container}>
                <CustomButton
                  buttonText={'Sign Up'}
                  activeOpacity={0.8}
                  containerStyle={SignupStyle.signup_button_container}
                  textStyle={SignupStyle.signup_button_text}
                />
                <View style={SignupStyle.already_account_row_Container}>
                  <View style={SignupStyle.signup_share_sub_container}>
                    <Text style={SignupStyle.note_black_text}>
                      Already have an
                    </Text>
                    <TouchableOpacity onPress={() => this.redirectSignIn()}>
                      <Text style={SignupStyle.hyperlink_text}>Account?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <CountryPicker
              // eslint-disable-next-line react/no-string-refs
              ref={'picker2'}
              options={labels}
              labels={labels}
              confirmText={'Done'}
              itemStyle={SignupStyle.country_list_item}
              cancelTextStyle={SignupStyle.cancel_button}
              confirmTextStyle={SignupStyle.done_button}
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
export default Signup;
