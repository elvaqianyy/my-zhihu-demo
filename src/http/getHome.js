import http from '../utils/request.js'
// 首页接口
export function recommend (data) {
  return http({
    url:'/api/v3/feed/topstory/recommend',
    method:'post',
    data
  })
}