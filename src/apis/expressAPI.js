// 导入封装axios对象
import request from '@/utils/request.js'

/**
 * 寄件API
 * @param {*} form
 * @returns
 */
export const mailAPI = function (form) {
  return request.post('apis/express/mail', form)
}

/**
 * 查询快件API
 * @param {*} expressId
 * @returns
 */
export const queryAPI = function (expressId) {
  return request.get('apis/express/query/' + expressId)
}
