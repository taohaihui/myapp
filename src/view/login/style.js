/**
 * Created by thh on 2018/8/3.
 */
import {StyleSheet} from 'react-native';

const {themeColor, colorRed} = global.phfz.color;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  loginBox: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#374455',
    borderRadius: 5,
    alignItems: 'center',
  },
  logImage: {
    width: '90%',
    marginTop: 5,
    marginBottom: 30,
  },
  errMsg: {
    width: '80%',
    height: 30,
    lineHeight: 30,
    color: colorRed,
    fontSize: 12,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10
  },
  footerText: {
    color: '#aaa',
    fontSize: 10,
  }
});

export default styles;