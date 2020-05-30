import request from '@/utils/request'

/**
 * 
 * @param {目标用户ID} userId 
 */
export function selectFollowers(userId) {
  return request({
    url: '/selectFollowers?noticer='+ userId,
    method: 'get',
  })
}

/**
 * 
 * @param {目标用户ID} userId 
 */
export function selectNoticers(userId) {
  return request({
    url: '/selectNoticers?follower='+ userId,
    method: 'get'
  })
}

/**
 * 
 * @param {数据对象} data 
 */
export function insertFollow(data) {
  return request({
    url:'/insertFollow',
    method: 'post',
    data
  })
}
