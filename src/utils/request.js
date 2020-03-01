import axios from 'axios'
const server = axios.create({
  baseURL: 'http://127.0.0.1:3001',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})
//添加请求拦截器
server.interceptors.request.use(function(config){
  return config;
}, function (error) {
  if (error.message.indexOf('network') > 0) {
    return Promise.reject('网络错误：', error)
  }
  return Promise.reject('请求接口错误：', error)
})
server.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject('服务接口错误：', error)
})

export default server
