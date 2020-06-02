import request from '@/utils/request'

/**
 * 
 * @param {用户ID} userId 
 */
export function selectLetterUserId(userId) {
  return request({
    url: '/selectLetterUserId?senderId=' + userId,
    method: 'get'
  })
}

/**
 * 
 * @param {当前账号用户id} senderId 
 * @param {收件人用户id} recipientId 
 */
export function selectLetterByBoth(senderId, recipientId) {
  return request({
    url: '/selectLetterByBoth?senderId='+senderId+'&recipientId='+recipientId,
    method: 'get'
  })
}

/**
 * 
 * @param {表单数据} data 
 */
export function insertLetter(data) {
  return request({
    url: '/insertLetter',
    method: 'post',
    data
  })
}