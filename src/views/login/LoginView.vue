<template>
  <div class="main">
    <el-card class="login-container" shadow="always" :style="{ height: containerHeight }">
      <el-button-group>
        <el-button type="primary" @click="clickLoginHandler" :disabled="buttonStatu">登录</el-button>
        <el-button type="primary" @click="clickRegisterHandler" :disabled="!buttonStatu">注册</el-button>
      </el-button-group>
      <div class="form-container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ExpressDeliverySystemLoginView',

  data() {
    return {
      buttonStatu: true,
      containerHeight: '300px'
    }
  },

  mounted() {},

  watch: {
    // 监听路由地址变化监听器
    // 动态改变登录注册按钮情况
    '$route.path': {
      handler: function (newVal) {
        if (newVal === '/express/login/login') {
          this.buttonStatu = true
          this.containerHeight = '300px'
        } else {
          this.buttonStatu = false
          this.containerHeight = '360px'
        }
      },
      // 首次加载触发
      immediate: true
    }
  },

  methods: {
    // 登录按钮点击事件
    clickLoginHandler() {
      this.$router.replace('/express/login/login')
    },
    // 注册按钮点击事件
    clickRegisterHandler() {
      this.$router.replace('/express/login/register')
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  background: url('@/assets/img/login_bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 550px;
  height: 300px;
  /deep/ .el-card__body {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
