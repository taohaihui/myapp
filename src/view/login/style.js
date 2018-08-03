/**
 * Created by thh on 2018/8/3.
 */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041934',
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