/**
 * Created by Administrator on 2018/8/5 0005.
 */
import {AsyncStorage} from 'react-native';

export default class Storage {
  static setItem(key, value) {
    return AsyncStorage.setItem(key, value).then(() => {
      console.log('set success');
    }).catch(err => {

    });
  }

  static getItem(key) {
    return AsyncStorage.getItem(key).catch(err => {
      console.log('get err');
    });
  }

  static removeItem(key) {
    return AsyncStorage.removeItem(key).then(() => {

    }).catch(err => {

    });
  }
}