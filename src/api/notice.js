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

/**
 * 
 */
export function selectAllNotice(){
  return request({
    url: '/selectAllNotice',
    method: 'get'
  })
}

/**
 * 
 * @param {用户ID} userId 
 */
export function selectNoticeByAdmin(userId){
  return request({
    url: '/selectNoticeByAdmin?userId=' + userId,
    method: 'get'
  })
}
