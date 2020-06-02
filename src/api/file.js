import request from '@/utils/request'

/**
 * 
 * @param {上传文件信息} data 
 */
export function insertFile(data) {
  return request({
    url: '/insertFile',
    method: 'post',
    data
  })
}

/**
 * 
 * @param {上传文件数据} data 
 */
export function upLoadFile(data) {
  return request({
    url: '/file/fileUpload',
    method: 'post',
    data
  })
}

/**
 * 
 * @param {上传用户id} uploaderId 
 */
export function selectFileByUploader(uploaderId) {
  return request({
    url: '/selectFileByUploader?uploaderId=' + uploaderId,
    method: 'get'
  })
}

/**
 * 
 * @param {文件名（哈希）} fileName 
 */
export function deleteFile(fileName) {
  return request({
    url: '/deleteFile?fileName=' + fileName,
    method: 'delete',
  })
}
