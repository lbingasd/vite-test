// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',  // 设置基本的请求路径
  timeout: 5000  // 设置超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前可以做一些处理，例如添加请求头等
    console.log('请求拦截器触发:', config);
    return config;
  },
  error => {
    // 处理请求错误
    console.error('请求拦截器错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 在响应被接收之前可以做一些处理
    console.log('响应拦截器触发:', response);
    return response;
  },
  error => {
    // 处理响应错误
    console.error('响应拦截器错误:', error);

    // 在这里进行统一的错误处理
    if (error.response) {
      // 服务器返回错误状态码
      console.log('服务器返回错误状态码:', error.response.status);
    } else if (error.request) {
      // 请求发送成功，但没有收到响应
      console.log('请求发送成功，但没有收到响应');
    } else {
      // 其他错误
      console.log('其他错误:', error.message);
    }

    return Promise.reject(error);
  }
);

// 封装一个通用的请求函数
const request = (method:string, url:string, data?:any) => {
  return instance({
    method: method,
    url: url,
    data: data
  });
};

// 封装各种请求方式，如 get、post、put、delete
const get = (url:string, params?:any) => request('get', url, params);
const post = (url:string, data:any) => request('post', url, data);
const put = (url:string, data:any) => request('put', url, data);
const del = (url:string, params:any) => request('delete', url, params);

export default {
  get,
  post,
  put,
  del
}