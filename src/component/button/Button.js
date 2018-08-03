/**
 * Created by thh on 2018/8/3.
 */
import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './style';

export default class Button extends Component {
  render() {
    let {style, text, activeOpacity, onPress} = this.props;

    return (
      <TouchableOpacity
        style={style}
        activeOpacity={activeOpacity}
        onPress={onPress}>
        <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  style: {},
  text: '按钮',
  activeOpacity: 0.8,
  onPress: null
};