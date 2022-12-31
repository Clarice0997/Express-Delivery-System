<template>
  <div class="el-main">
    <!-- 轮播图容器 -->
    <div class="swipper-container">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in swiperData" :key="item.name">
          <el-image style="width: 100%; height: 100%" fit="cover" :src="item.imgURL"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 服务容器 -->
    <div class="service-container">
      <h1 class="service-h1">物流服务介绍</h1>
      <!-- Tabs栏 -->
      <div class="tabs-container">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane label="快递服务" name="first">
            <div class="cards-container">
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/speedy_express_edc602d35a.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰特快</h3></div>
                  <span>为您提供 “快速、准时、稳定” 的高品质、门到门的标准快递服务</span>
                </div>
              </el-card>
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/standard_express_111978fa0b.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰标快</h3></div>
                  <span>为您提供 “价格更优、时效稳定、托寄无忧、服务范围广” 门到门的标准快递服务</span>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="快运服务" name="second">
            <div class="cards-container">
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/speedy_express_edc602d35a.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰特快</h3></div>
                  <span>为您提供 “快速、准时、稳定” 的高品质、门到门的标准快递服务</span>
                </div>
              </el-card>
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/standard_express_111978fa0b.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰标快</h3></div>
                  <span>为您提供 “价格更优、时效稳定、托寄无忧、服务范围广” 门到门的标准快递服务</span>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="冷运服务" name="third">
            <div class="cards-container">
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/speedy_express_edc602d35a.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰特快</h3></div>
                  <span>为您提供 “快速、准时、稳定” 的高品质、门到门的标准快递服务</span>
                </div>
              </el-card>
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/standard_express_111978fa0b.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰标快</h3></div>
                  <span>为您提供 “价格更优、时效稳定、托寄无忧、服务范围广” 门到门的标准快递服务</span>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="医药服务" name="fourth">
            <div class="cards-container">
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/speedy_express_edc602d35a.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰特快</h3></div>
                  <span>为您提供 “快速、准时、稳定” 的高品质、门到门的标准快递服务</span>
                </div>
              </el-card>
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/standard_express_111978fa0b.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰标快</h3></div>
                  <span>为您提供 “价格更优、时效稳定、托寄无忧、服务范围广” 门到门的标准快递服务</span>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="国际服务" name="fifth">
            <div class="cards-container">
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/speedy_express_edc602d35a.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰特快</h3></div>
                  <span>为您提供 “快速、准时、稳定” 的高品质、门到门的标准快递服务</span>
                </div>
              </el-card>
              <el-card body-style="width:500px;padding:0">
                <el-image style="width: 100%; height: 240px" fit="cover" src="https://www.sf-express.com/uploads/standard_express_111978fa0b.jpg"></el-image>
                <div class="card-text">
                  <div><h3>顺丰标快</h3></div>
                  <span>为您提供 “价格更优、时效稳定、托寄无忧、服务范围广” 门到门的标准快递服务</span>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpressDeliverySystemHomeView',

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
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
.el-main {
  background-color: #ffffff;
  color: #333;
  padding: 0;
  text-align: center;
  height: 850px;
  // 轮播图容器
  .swipper-container {
    height: 350px;
  }
  .service-container {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .service-h1 {
      font-size: 24px;
      font-weight: bolder;
      margin: 30px 0;
    }
    .tabs-container {
      width: 1200px;
      // 修改Tab选中样式
      /deep/ .el-tabs__item.is-active {
        color: #dd2135;
      }
      /deep/.el-tabs__active-bar {
        background-color: #dd2135;
      }
    }
  }
}
.cards-container {
  display: flex;
  justify-content: space-around;
}
.card-text {
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-weight: bold;
    font-size: 16px;
    margin: 10px 0;
  }
  span {
    font-size: 12px;
    text-align: left;
    color: #a3a2a4;
  }
}
</style>
