/**
 * Created by thh on 2018/8/3.
 */
import reqServer from '../utils/axios';

export default function reqLogin(data) {
  return reqServer({
    url: 'login.do',
    method: 'get',
    data: data
  });

}