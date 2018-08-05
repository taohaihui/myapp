/**
 * Created by Administrator on 2018/8/4 0004.
 */
import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import styles from './style';

const {colorBlue} = global.phfz.color;
import Storage from '../../utils/storage';

export default class WelCome extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.checkLogin();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor={colorBlue}/>
        <Text style={styles.text}>欢迎</Text>
      </View>
    );
  }

  checkLogin() {
    const {navigate} = this.props.navigation;

    Storage.getItem('username').then(data => {
      if (data) {
        navigate('Index');
      } else {
        navigate('Login');
      }
    });
  }
}