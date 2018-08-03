/**
 * Created by thh on 2018/8/3.
 */
import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TextInput, Alert, Keyboard} from 'react-native';

import styles from './style';
import Input from '../../component/input/Input';
import Button from '../../component/button/Button';

import reqLogin from '../../server/login';

const {themeColor} = global.phfz.color;

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: '',
    pwd: '',
    showFooter: true,
    msg: '',
  };

  componentDidMount() {
    this.addListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor={themeColor}/>
        <View style={styles.loginBox}>
          <Image
            style={styles.logImage}
            resizeMode="contain"
            source={require('../../images/logo.png')}/>
          <Input
            style={{width: '80%', marginBottom: 20}}
            placeholder="请输入账号"
            keyboardType="email-address"
            value={this.state.username}
            onChangeText={this.handleChange.bind(this, 'username')}/>
          <Input
            style={{width: '80%'}}
            placeholder="请输入密码"
            keyboardType="email-address"
            type="password"
            value={this.state.pwd}
            onChangeText={this.handleChange.bind(this, 'pwd')}/>
          <Text style={styles.errMsg}>{this.state.msg}</Text>
          <Button
            style={{width: '80%', marginBottom: 20}}
            text="登录"
            onPress={this.handleClick.bind(this)}/>
        </View>
        {
          this.state.showFooter && (
            <View style={styles.footer}>
              <Text style={styles.footerText}>Copyright © 2016 intelligent platform All Rights Reserved</Text>
              <Text style={styles.footerText}>版权所有 · 普惠法治</Text>
            </View>
          )
        }
      </View>
    );
  }

  addListener() {
    Keyboard.addListener('keyboardDidShow', () => {
      this.setState({
        showFooter: false
      });
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.setState({
        showFooter: true
      });
    });
  }

  removeListener() {
    Keyboard.removeAllListeners();
  }

  handleChange(key, value) {
    this.setState({
      [key]: value,
      msg: '',
    });
  }

  handleClick() {
    let data = {
      username: this.state.username,
      password: this.state.pwd,
    };

    reqLogin(data).then(res => {
      console.log(res);
      res.success = true;
      if (res.success) {
        this.props.navigation.navigate('Index');
      } else {
        this.setState({
          msg: res.msg
        });
      }
    });
  }
}