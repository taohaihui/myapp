/**
 * Created by thh on 2018/8/3.
 */
import {StyleSheet} from 'react-native';

const {colorBlue} = global.phfz.color;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    lineHeight: 40,
    backgroundColor: colorBlue,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default styles;