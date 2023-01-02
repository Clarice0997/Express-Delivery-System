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
