import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3333',
});

/**
 * IOS: http://localhost:3333
 * USB IOS OR ANDROID: http://192.168.0.102:3333
 * ANDROID(GENNYMOTION): http://10.0.3.2:3333
 * ANDROID(ANDROID STUDIO): http://10.0.2.2:3333
 */

export default api;
