import { fetchPostQuery } from '@/tools/httpTools'
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export const loginHttp = (query) => {
  return fetchPostQuery('/user/login', query)
}

export const getAllUserListHttp = (body) => {
  console.log(body, 'body')
  return fetchPostQuery('/user/findAllUser', body)
}
