/**
 * Created by Administrator on 2018/8/5 0005.
 */
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 2,
  },
  webView: {
    width: '100%',
    height: '100%',
  }
});

export default styles;
