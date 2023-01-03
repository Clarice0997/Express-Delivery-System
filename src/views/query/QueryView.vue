<template>
  <div class="query-container">
    <h1>物流查询</h1>
    <div style="margin-top: 15px">
      <el-input placeholder="请输入快递单号" v-model="expressId" clearable @keyup.enter.native="enterSearchHandler">
        <template slot="append">
          <el-button slot="append" icon="el-icon-search" @click="clickSearchHandler" v-loading.fullscreen="fullscreenLoading" :loading="btnLoading"></el-button>
        </template>
      </el-input>
    </div>
    <div class="display-container" v-if="formIndex">
      <div>
        <h2>寄件人信息</h2>
        <span>{{ form.senderName + ' ' + form.senderPhone }}</span>
        <span>{{ form.senderProvince + form.senderCity + form.senderDistrict + ' ' + form.senderAddress }}</span>
      </div>
      <div>
        <h2>收件人信息</h2>
        <span>{{ form.receiverName + ' ' + form.receiverPhone }}</span>
        <span>{{ form.receiverProvince + form.receiverCity + form.receiverDistrict + ' ' + form.receiverAddress }}</span>
      </div>
      <div>
        <h2>快件信息</h2>
        <span>{{ '快递类型：' + form.type + ' ' + '快递重量：' + form.weight }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { queryAPI } from '@/apis/expressAPI'

export default {
  name: 'ExpressDeliverySystemQueryView',

  data() {
    return {
      expressId: '',
      formIndex: false,
      // Loading显隐
      fullscreenLoading: false,
      // 按钮加载状态
      btnLoading: false,
      // 表单数据对象
      form: {
        senderName: '123',
        senderPhone: '123',
        senderProvince: '123',
        senderCity: '123',
        senderDistrict: '123',
        senderAddress: '123',
        receiverName: '123',
        receiverPhone: '123',
        receiverProvince: '123',
        receiverCity: '123',
        receiverDistrict: '123',
        receiverAddress: '123',
        type: '123',
        weight: '123'
      }
    }
  },

  mounted() {},

  methods: {
    // 回车搜索处理函数
    enterSearchHandler() {
      this.clickSearchHandler()
    },
    // 点击查询按钮函数
    clickSearchHandler() {
      if (this.expressId.length === 16) {
        // Loading遮罩
        this.fullscreenLoading = true
        // 加载按钮
        this.btnLoading = true
        // 发起查询网络请求
        queryAPI(this.expressId)
          .then(({ data }) => {
            if (data.code === 200) {
              console.log(data.data.data)
              // 展示查询内容
              this.formIndex = true
              // 保存查询内容
              this.form = data.data.data
              console.log(this.form)
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
          })
      } else {
        this.$alert('快递单号是16位的纯数字', {
          confirmButtonText: '确定'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.query-container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 30px;
  h1 {
    font-size: 35px;
  }
}
.display-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  div {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  span {
    margin: 20px 0;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
