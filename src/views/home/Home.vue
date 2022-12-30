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
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <!-- 底部版权 -->
      <el-footer height="60px">
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
      activeIndex: '1',
      activeName: 'second',
      swiperData: [
        {
          name: 'AD1',
          imgURL: 'https://www.sto.cn/static/img/banner_1.png'
        },
        {
          name: 'AD2',
          imgURL: 'https://www.sto.cn/static/img/banner_2.png'
        }
      ]
    }
  },

  mounted() {},

  methods: {
    clickLogoHandler() {
      this.$router.replace('/express/home')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick(tab, event) {
      console.log(tab, event)
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
