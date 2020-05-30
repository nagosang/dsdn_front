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
export function pageBlogByType(data) {
  return request({
    url: '/selectBlogByCondition?pageNow='+ data.page + '&size=' + data.size + '&type=' + data.type,
    method: 'get'
  })
}

/**
 * 
 * @param {博文id} Id 
 */
export function queryOneBlog(Id) {
  return request({
    url: '/selectBlogById?blogId='+Id,
    method: 'get'
  })
}

/**
 * 
 * @param {博客id} blogId 
 */
export function countPraise(blogId){
  return request({
    url: '/countPraise?blogId='+blogId,
    method: 'get'
  })
}

/**
 * 
 * @param {博客id} blogId 
 * @param {用户id} userId 
 */
export function insertPraise(blogId, userId) {
  return request({
    url: '/insertPraise?blogId='+blogId+'&userId='+userId,
    method: 'post'
  })
}

/**
 * 
 * @param {博客id} blogId 
 * @param {用户id} userId 
 */
export function deletePraise(blogId, userId) {
  return request({
    url: '/deletePraise?blogId='+blogId+'&userId='+userId,
    method: 'DELETE'
  })
}

/**
 * 
 * @param {博客id} blogId 
 */
export function selectCommentByBlogId(blogId) {
  return request({
    url: '/selectCommentByBlogId?blogId='+ blogId,
    method: 'get'
  })
}

/**
 * 
 * @param {表单数据} data 
 */
export function insertComment(data) {
  return request({
    url: '/insertComment',
    method: 'post',
    data
  })
}
