import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Image, Text} from 'react-native';
import CountryPicker from '../../components/CountryPicker';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/FloatableEditText';
import {Colors} from '../../theme/colors';
import {Images} from '../../theme/images';
import ForgotPassStyle from './style';
import {Actions} from 'react-native-router-flux';

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

class ForgotPassword extends Component {
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
      <View style={ForgotPassStyle.rootContainer}>
        <ScrollView contentContainerStyle={ForgotPassStyle.scrollViewContainer}>
          <Image
            source={Images.Hexagonal}
            resizeMode="stretch"
            style={ForgotPassStyle.hexagonal_backgroud}
          />
          <Image
            source={Images.Ribbins}
            resizeMode="contain"
            style={ForgotPassStyle.ribbins_backgroud}
          />
          <View style={ForgotPassStyle.subrootContainer}>
            <Image
              source={Images.ChampyLogo}
              resizeMode="contain"
              style={ForgotPassStyle.logo_champ}
            />
            <View style={ForgotPassStyle.forgotpass_share_container}>
              <Text style={ForgotPassStyle.forgotpass_text}>
                FORGOT PASSWORD
              </Text>
              <Text style={ForgotPassStyle.champy_help_text}>
                Champy can help
              </Text>
              <Text style={ForgotPassStyle.select_country_note_text}>
                {
                  'Please select your country code from the list\nand enter your phone number to'
                }
              </Text>
              <Text style={ForgotPassStyle.hyperlink_text}>
                Reset Your Password!
              </Text>
            </View>
            <View style={ForgotPassStyle.form_container}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.refs.picker2.show()}>
                <CustomInput
                  floatbletext={'SELECT YOUR COUNTRY'}
                  floatbletextStyle={ForgotPassStyle.floatable_text}
                  containerStyle={ForgotPassStyle.inputContainer}
                  editable={false}
                  showDropArrow={true}
                  inputStyle={ForgotPassStyle.inputStyle}
                  placeholderText={'AUSTRALIA'}
                  value={this.state.selectedOption}
                  placeholderTextColor={Colors.inputPlaceholderColor}
                />
              </TouchableOpacity>
              <CustomInput
                floatbletext={'YOUR PHONE NUMBER'}
                floatbletextStyle={ForgotPassStyle.floatable_text}
                containerStyle={ForgotPassStyle.inputContainer}
                editable={true}
                keyboardType={'number-pad'}
                inputStyle={ForgotPassStyle.inputStyle}
                placeholderText={'+61 0000 000 000'}
                placeholderTextColor={Colors.inputPlaceholderColor}
              />
              <Text style={ForgotPassStyle.phone_link_text}>
                {
                  'Enter the phone number linked to your account.\nA new password will be sent via SMS to your\nmobile number.'
                }
              </Text>
              <View style={ForgotPassStyle.form_button_container}>
                <CustomButton
                  buttonText={'Send Now'}
                  activeOpacity={0.8}
                  onClick={() => this.redirectSignIn()}
                  containerStyle={ForgotPassStyle.sendnow_button_container}
                  textStyle={ForgotPassStyle.sendnow_text}
                />
              </View>
              <View style={ForgotPassStyle.forgotpass_row_Container}>
                <View style={ForgotPassStyle.goback_sub_container}>
                  <Text style={ForgotPassStyle.note_black_text}>
                    Go back to
                  </Text>
                  <TouchableOpacity onPress={() => this.redirectSignIn()}>
                    <Text style={ForgotPassStyle.hyperlink_text}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <CountryPicker
                ref={'picker2'}
                options={labels}
                labels={labels}
                confirmText={'Done'}
                itemStyle={ForgotPassStyle.country_list_item}
                cancelTextStyle={ForgotPassStyle.cancel_button}
                confirmTextStyle={ForgotPassStyle.done_button}
                onSubmit={option => {
                  this.setState({
                    selectedOption: option,
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ForgotPassword;
