/**
 * Created by thh on 2018/8/3.
 */
import './global/global'; //全局配置

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import WelCome from './view/welcom/WelCome';
import Login from './view/login/Login';
import Index from './view/index/Index';

const App = StackNavigator({
  Welcome: {screen: WelCome},
  Login: {screen: Login},
  Index: {screen: Index},
});

export default App;