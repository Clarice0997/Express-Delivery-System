<template>
  <div>
    <el-container>
      <!-- 顶部导航条 -->
      <el-header height="60px">
        <div class="header-container">
          <!-- LOGO容器 -->
          <div class="logo-container" @click="clickLogoHandler">
            <img src="@/assets/logo.png" alt="LOGO" />
          </div>
          <!-- 导航栏容器 -->
          <div class="nav-container">
            <el-menu class="el-menu" :default-active="$route.path" mode="horizontal" router @select="handleSelect" background-color="#333333" text-color="#ffffff" active-text-color="#ffffff">
              <el-menu-item index="/express/home">首页</el-menu-item>
              <el-menu-item index="/express/mail">我要寄件</el-menu-item>
              <el-menu-item index="/express/query">快件查询</el-menu-item>
            </el-menu>
          </div>
          <div class="login-container">
            <router-link to="/express/login">
              <span>快速登录/注册</span>
            </router-link>
          </div>
        </div>
      </el-header>
      <!-- 页面主体 -->
      <el-main :style="{ height: mainHeight }">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <!-- 底部版权 -->
      <el-footer height="60px" :style="{ display: footerDisplay }">
        <span>版权所有 @快递公司 2021-2022</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ExpressDeliverySystemHome',

  data() {
    return {
      footerDisplay: 'flex',
      mainHeight: '850px'
    }
  },

  mounted() {},

  watch: {
    // 监听路由地址变化监听器
    // 动态改变登录注册按钮情况
    '$route.path': {
      handler: function (newVal) {
        if (newVal.match('/express/login')) {
          this.footerDisplay = 'none'
          this.mainHeight = document.documentElement.clientHeight - 60 + 'px'
        } else {
          this.footerDisplay = 'flex'
          this.mainHeight = '850px'
        }
      },
      // 首次加载触发
      immediate: true
    }
  },

  methods: {
    clickLogoHandler() {
      this.$router.replace('/express/home')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #333333;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  display: flex;
  justify-content: center;
}
.header-container {
  width: 60%;
  display: flex;
  justify-content: space-around;
  // LOGO容器
  .logo-container {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 45px;
      height: 45px;
    }
  }
  // 导航栏容器
  .nav-container {
    width: 265px;
    background: orange;
    .el-menu.el-menu--horizontal {
      border-bottom: 0;
    }
  }
  // 登录按钮容器
  .login-container {
    width: 100px;
    span {
      font-size: 14px;
      color: white;
      transition: 0.3s;
    }
    span:hover {
      color: #409eff;
    }
  }
}
.el-main {
  background-color: #ffffff;
  color: #333;
  padding: 0;
  text-align: center;
  height: 850px;
}
.el-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: #ffffff;
    font-size: 12px;
  }
}
</style>
