import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/salad-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/salad-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vsalad-admin/user/logout',
    method: 'post'
  })
}
