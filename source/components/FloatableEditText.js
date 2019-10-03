import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, Image} from 'react-native';
import {Images} from '../theme/images';
import AppStyle from '../theme/commonStyle';

export default class CustomEditText extends Component {
  static propTypes = {
    containerStyle: PropTypes.any,
    inputStyle: PropTypes.any,
    floatbletextStyle: PropTypes.any,
    floatbletext: PropTypes.string,
    value: PropTypes.string,
    editable: PropTypes.bool,
    keyboardType: PropTypes.string,
    onchangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    placeholderText: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    placeholderTextStyle: PropTypes.func,
    showDropArrow: PropTypes.bool,
  };
  render() {
    return (
      <View style={this.props.containerStyle}>
        {this.props.floatbletext !== '' ? (
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={AppStyle.inputContainer}>
            <Text style={this.props.floatbletextStyle}>
              {this.props.floatbletext}
            </Text>
            {this.props.showDropArrow ? 
              <Image
                source={Images.DropArrow}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={AppStyle.dropArrowStyle}
              />
             : null}
          </View>
        ) : null}
        <TextInput
          style={this.props.inputStyle}
          underlineColorAndroid="transparent"
          placeholder={this.props.placeholderText}
          placeholderTextColor={this.props.placeholderTextColor}
          autoCapitalize="none"
          editable={this.props.editable}
          value={this.props.value}
          secureTextEntry={this.props.secureTextEntry}
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onchangeText}
        />
      </View>
    );
  }
}
