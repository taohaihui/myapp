/**
 * Created by Administrator on 2018/8/3 0003.
 */
import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import styles from './style';
import {Button} from 'antd-mobile-rn';

const {themeColor} = global.phfz.color;

export default class Index extends Component {
  static navigationOptions = {
    header: null
  };

  render(){
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor={themeColor}/>
        <Button>index page</Button>
      </View>
    );
  }
}