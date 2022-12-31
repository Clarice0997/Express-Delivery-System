<template>
  <div class="register-container">
    <h1>用户注册</h1>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="medium">
      <el-form-item label="登录名" prop="username">
        <el-input v-model="form.username" clearable prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input v-model="form.password" show-password prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input v-model="form.checkPassword" show-password maxlength="18" minlength="6" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-button type="primary" v-loading.fullscreen="fullscreenLoading" :loading="btnLoading" @click="clickRegHandler">立即注册</el-button>
    </el-form>
  </div>
</template>

<script>
import { registerAPI } from '@/apis/loginAPI'
import router from '@/router'

export default {
  name: 'ExpressDeliverySystemRegister',

  data() {
    // 自定义校验 确认密码
    const repasswordValidator = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 表单数据对象
      form: {
        username: '',
        password: '',
        checkPassword: ''
      },
      // 表单校验对象
      rules: {
        username: [
          // 必填项校验
          {
            required: true,
            message: '登录名不能为空',
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
            message: '密码不能为空',
            trigger: 'blur'
          },
          // 长度校验
          {
            min: 6,
            max: 20,
            message: '登录密码长度在6-20字符之间',
            trigger: 'blur'
          }
        ],
        checkPassword: [
          // 必填项校验
          {
            required: true,
            message: '确认密码不能为空',
            trigger: 'blur'
          },
          // 长度校验
          {
            min: 6,
            max: 20,
            message: '确认密码长度在6-20字符之间',
            trigger: 'blur'
          },
          // 自定义校验 确认密码
          {
            validator: repasswordValidator,
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
    // 点击注册按钮处理函数
    clickRegHandler() {
      // 校验表单
      this.$refs.form.validate(async valid => {
        if (valid) {
          // Loading遮罩
          this.fullscreenLoading = true
          // 加载按钮
          this.btnLoading = true
          // 发起登录网络请求
          registerAPI(this.form.username, this.form.password)
            .then(({ data }) => {
              if (data.code === 200) {
                // 成功注册弹窗
                this.$message({
                  message: data.message,
                  type: 'success',
                  duration: 2000
                })
                // 注册成功跳转登录界面
                router.replace('/express/login/login')
              } else {
                this.$message({
                  message: data.data.message,
                  type: 'error',
                  duration: 2000
                })
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
.register-container {
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
