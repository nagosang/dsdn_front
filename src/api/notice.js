import request from '@/utils/request'

/**
 * @param {发布公告数据} data
 */

export function insertNotice(data) {
    return request({
      url: '/insertNotice',
      method: 'post',
      data
    })
  }