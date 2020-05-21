import request from '@/utils/request'

/**
 * @param {登录表单数据} data
 */

export function Login(data) {
  return request({
    url: '/login?userId='+ data.userId + '&password='+ data.password,
    method: 'post',
  })
}
  