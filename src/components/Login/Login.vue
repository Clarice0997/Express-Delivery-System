<template>
  <div class="login-container">
    <h1>用户登录</h1>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="medium">
      <el-form-item label="登录名" prop="username">
        <el-input v-model="form.username" clearable prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="form.password" show-password prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-button type="primary" v-loading.fullscreen="fullscreenLoading" :loading="btnLoading" @click="clickLoginHandler">立即登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { loginAPI, userInfoAPI } from '@/apis/loginAPI'
import { setToken } from '@/utils/auth'
import { setCookie } from '@/utils/cookie'
import router from '@/router'
import store from '@/store'

export default {
  name: 'ExpressDeliverySystemLogin',

  data() {
    return {
      // 表单数据对象
      form: {
        username: '',
        password: ''
      },
      // 表单校验对象
      rules: {
        username: [
          // 必填项校验
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          // 长度校验
          {
            min: 6,
            max: 20,
            message: '登录名长度在6-20字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          // 必填项校验
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          // 长度校验
          {
            min: 6,
            max: 20,
            message: '登录密码长度在6-20字符之间',
            trigger: 'blur'
          }
        ]
      },
      // Loading显隐
      fullscreenLoading: false,
      // 按钮加载状态
      btnLoading: false
    }
  },

  mounted() {},

  methods: {
    // 点击登录按钮处理函数
    clickLoginHandler() {
      // 校验表单
      this.$refs.form.validate(async valid => {
        if (valid) {
          // Loading遮罩
          this.fullscreenLoading = true
          // 加载按钮
          this.btnLoading = true
          // 发起登录网络请求
          loginAPI(this.form.username, this.form.password)
            .then(async ({ data }) => {
              if (data.code === 200) {
                // 成功登录弹窗
                this.$message({
                  message: data.message,
                  type: 'success',
                  duration: 2000
                })
                // 保存Token
                setToken(data.data.token)
                // Vuex保存登录索引
                store.dispatch('setLoginIndex', true)
                // 获取用户信息接口
                await userInfoAPI()
                  .then(({ data }) => {
                    if (data.code === 200) {
                      // Vuex保存用户信息
                      store.dispatch('setUserInfo', data.data.data)
                      // localStorage保存用户信息
                      setCookie('userInfo', data.data.data)
                    }
                  })
                  .catch(err => {
                    this.$message({
                      message: err,
                      type: 'error',
                      duration: 2000
                    })
                  })
                // 登录成功跳转首页
                router.replace('/express/home')
              }
            })
            .catch(err => {
              this.$message({
                message: err,
                type: 'error',
                duration: 2000
              })
            })
            .finally(() => {
              // 停止加载按钮
              this.btnLoading = false
              // 停止全屏遮罩
              this.fullscreenLoading = false
              // 重置表单数据
              this.form = this.$options.data().form
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 500px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
