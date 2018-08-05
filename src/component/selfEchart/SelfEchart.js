/**
 * Created by Administrator on 2018/8/5 0005.
 */
import React, {Component} from 'react';
import {WebView, View, Dimensions} from 'react-native';

import styles from './style';

const htmlSource = require('./echart.html');

export default class SelfEchart extends Component {
  state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  };

  componentDidMount() {

  }

  render() {
    let {width, height} = this.state;

    return (
      <View style={[{width, height}, this.props.style]}>
        <WebView
          ref={node => this.echartsNode = node}
          style={styles.webView}
          startInLoadingState={true} //显示加载图标
          source={htmlSource}
          onLoad={this.htmlLoad.bind(this)}
          onMessage={this.getMessage.bind(this)}/>
      </View>
    );
  }

  htmlLoad() {
    this.initDom();
    this.props.onLoad && this.props.onLoad();
  }

  //初始化图表尺寸
  initDom() {
    let {width, height} = this.state;
    let data = {
      action: 'initDom',
      options: {
        width,
        height,
      }
    };
    this.postMessage(data);
  }

  //接收webView传回的数据
  getMessage(e){
    let data = JSON.parse(e.nativeEvent.data);
    this.props.onMessage && this.props.onMessage(data);
  }

  //向webView发送message事件
  postMessage(data) {
    this.echartsNode.postMessage(JSON.stringify(data));
  }

  //向webView注入js代码
  injectJavaScript(code) {
    this.echartsNode.injectJavaScript(code);
  }
}

SelfEchart.defaultProps = {
  style: {},
  onMessage: null,
  onLoad: null,
};