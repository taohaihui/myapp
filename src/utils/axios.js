/**
 * Created by thh on 2018/8/3.
 */
import axios from 'axios';
import {Alert} from 'react-native';

export default function reqServer(opts) {
  let defaultOpts = {
    url: '',
    method: 'GET',
    baseURL: 'http://10.28.200.215:8090',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: null, //get请求参数
    data: null, //post请求参数
    timeout: 20000,
    responseType: 'json', //服务器响应的数据类型
  };

  Object.assign(defaultOpts, opts);

  if (defaultOpts.method === 'get') {
    defaultOpts.params = defaultOpts.data;
  }

  let ajax = axios(defaultOpts);

  ajax
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }

      Alert.alert(res.status);
    })
    .catch(err => {
      Alert.alert(err);
    });

  return ajax;
}