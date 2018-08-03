/**
 * Created by thh on 2018/8/3.
 */
import './global/global'; //全局配置

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import Login from './view/login/Login';

const App = StackNavigator({
  Login: {screen: Login}
});

export default App;