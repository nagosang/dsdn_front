import request from '@/utils/request'

/**
 * @param {发布博文数据} data
 */

export function insertBlog(data) {
  return request({
    url: '/insertBlog',
    method: 'post',
    data
  })
}