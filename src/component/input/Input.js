/**
 * Created by thh on 2018/8/3.
 */
import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

import styles from './style';

export default class Input extends Component {
  render() {
    let {style, type, placeholder, placeholderTextColor, keyboardType, maxLength, value} = this.props;
    let {onChangeText} = this.props;
    let secureTextEntry = type === 'password' && true;

    return (
      <TextInput
        style={[styles.textInput, style]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        //keyboardType={keyboardType}
        maxLength={maxLength}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        selectionColor="#2699f2"
        underlineColorAndroid="transparent"/>
    );
  }
}

Input.defaultProps = {
  style: {},
  type: 'text',
  placeholder: '',
  placeholderTextColor: '#cccccc',
  keyboardType: 'default',
  maxLength: 32,
  value: '',
  onChangeText: null
};