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
      <el-button type="primary" v-loading.fullscreen="fullscreenLoading" :loading="btnLoading">立即登录</el-button>
    </el-form>
  </div>
</template>

<script>
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

  methods: {}
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
