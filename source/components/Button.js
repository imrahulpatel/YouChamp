import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity} from 'react-native';

export default class CustomButton extends Component {
  // Define the propstype for custom button view
  static propTypes = {
    containerStyle: PropTypes.any,
    activeOpacity: PropTypes.number,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    onClick: PropTypes.any,
    buttonText: PropTypes.string,
  };
  render() {
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={this.props.onClick}>
        <View style={this.props.containerStyle}>
          <Text style={this.props.textStyle}>{this.props.buttonText}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
