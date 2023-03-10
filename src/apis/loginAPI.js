// 导入封装axios对象
import request from '@/utils/request.js'

/**
 * 登录API
 * @param {*} username
 * @param {*} password
 * @returns
 */
export const loginAPI = function (username, password) {
  return request.post('system/user/login', {
    username,
    password
  })
}

/**
 * 注册API
 * @param {*} username
 * @param {*} password
 * @returns
 */
export const registerAPI = function (username, password) {
  return request.post('system/user/register', {
    username,
    password
  })
}

/**
 * 获取用户信息API
 * @returns
 */
export const userInfoAPI = function () {
  return request.get('system/user/userInfo')
}
