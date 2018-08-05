/**
 * Created by Administrator on 2018/8/3 0003.
 */
import React, {Component} from 'react';
import {View, Text, StatusBar, BackHandler, Alert} from 'react-native';

import styles from './style';
import {Button} from 'antd-mobile-rn';
import SelfEchart from '../../component/selfEchart/SelfEchart';

const {themeColor} = global.phfz.color;

export default class Index extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    webViewMsg: 'asd'
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
        <Button onClick={this.handleClick.bind(this)}>index page</Button>
        <SelfEchart
          ref={node => this.selfEchart = node}
          onLoad={this.htmlLoad.bind(this)}
          onMessage={this.getMessage.bind(this)}/>
        <Text style={{color: '#fff'}}>{this.state.webViewMsg}</Text>
      </View>
    );
  }

  handleClick() {
    let options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    let data = {
      action: 'newData',
      options,
    };
    this.selfEchart.postMessage(data);
  }

  htmlLoad() {
    let data = {
      action: 'addEChartListener',
      options: [
        {
          name: 'click',
          value: ['componentType', 'seriesType', 'seriesIndex', 'name', 'data']
        }
      ],
    };

    this.selfEchart.postMessage(data);
  }

  getMessage(data) {
    console.log(data);
  }

  addListener() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }

  removeListener() {
    BackHandler.removeEventListener('hardwareBackPress');
  }
}