import { fetchPostBody, fetchPostQuery } from '@/tools/httpTools'
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

export const logoutHttp = (query) => {
  return fetchPostQuery('/userlogout', query)
}

export const registerHttp = (body) => {
  return fetchPostBody('/user/register', body)
}

export const showLevelHttp = (query) => {
  return fetchPostQuery('/user/showLevel', query)
}

export const updateHttp = (body) => {
  return fetchPostBody('/user/update', body)
}