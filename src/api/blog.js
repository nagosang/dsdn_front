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

/**
 * 
 * @param {博文类型} type 
 */

export function getMost3ByType(type) {
  return request({
    url: '/selectMost3Praise?type='+type,
    method: 'get'
  })
}

/**
 * 
 * @param {博文类型} type 
 */

export function getMost3() {
  return request({
    url: '/selectMost3Praise',
    method: 'get'
  })
}

/**
 * 
 * @param {查询对象} data
 */
export function selectBlogByCondition(data) {
  return request({
    url: '/selectBlogByCondition?pageNow='+ data.page + '&size=' + data.size + '&type=' + data.type,
    method: 'get'
  })
}

