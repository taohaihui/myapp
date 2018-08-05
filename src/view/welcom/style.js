/**
 * Created by Administrator on 2018/8/4 0004.
 */
import {StyleSheet} from 'react-native';

const {colorBlue} = global.phfz.color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorBlue,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  }
});

export default styles;