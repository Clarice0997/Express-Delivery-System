<template>
  <div class="mail-container">
    <div class="page-container">
      <div class="form-container">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="medium" label-position="top">
          <!-- 寄方信息 -->
          <div class="sender-container">
            <h3>寄方信息</h3>
            <div>
              <el-form-item label="姓名" prop="sender_name">
                <el-input v-model="form.sender_name" clearable></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="sender_phone">
                <el-input v-model="form.sender_phone" clearable οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"></el-input>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="省市区" prop="sender_district">
                <el-cascader :options="options" v-model="selectedSenderOptions" @change="senderHandleChange"></el-cascader>
              </el-form-item>
              <el-form-item label="详细地址" prop="sender_address">
                <el-input v-model="form.sender_address" clearable></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="receiver-container">
            <h3>收方信息</h3>
            <div>
              <el-form-item label="姓名" prop="receiver_name">
                <el-input v-model="form.receiver_name" clearable></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="receiver_phone">
                <el-input v-model="form.receiver_phone" clearable οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"></el-input>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="省市区" prop="receiver_district">
                <el-cascader :options="options" v-model="selectedReceiverOptions" @change="receiverHandleChange"></el-cascader>
              </el-form-item>
              <el-form-item label="详细地址" prop="receiver_address">
                <el-input v-model="form.receiver_address" clearable></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="express-container">
            <h3>快件信息</h3>
            <el-form-item label="快件类型" prop="type">
              <el-radio-group v-model="form.type">
                <el-radio label="文件">文件</el-radio>
                <el-radio label="电子产品">电子产品</el-radio>
                <el-radio label="服装鞋帽">服装鞋帽</el-radio>
                <el-radio label="食品">食品</el-radio>
                <el-radio label="医药卫生">医药卫生</el-radio>
                <el-radio label="其他">其他</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="快件重量" prop="weight">
              <el-radio-group v-model="form.weight">
                <el-radio label="1kg">1kg</el-radio>
                <el-radio label="3kg">3kg</el-radio>
                <el-radio label="5kg">5kg</el-radio>
                <el-radio label="10kg">10kg</el-radio>
                <el-radio label="20kg">20kg</el-radio>
                <el-radio label="手动输入"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <el-button type="primary" v-loading.fullscreen="fullscreenLoading" :loading="btnLoading" @click="clickMailHandler">确定寄件</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
import { mailAPI } from '@/apis/expressAPI'

export default {
  name: 'ExpressDeliverySystemMailView',

  data() {
    return {
      // 表单数据对象
      form: {
        sender_name: '',
        sender_phone: '',
        sender_province: '',
        sender_city: '',
        sender_district: '',
        sender_address: '',
        receiver_name: '',
        receiver_phone: '',
        receiver_province: '',
        receiver_city: '',
        receiver_district: '',
        receiver_address: '',
        type: '',
        weight: ''
      },
      // 表单校验对象
      rules: {
        // 寄件人姓名校验
        sender_name: [
          // 必填项校验
          {
            required: true,
            message: '请输入寄件人姓名',
            trigger: 'blur'
          },
          // 长度校验
          {
            min: 3,
            max: 20,
            message: '寄件人姓名应长于3字符',
            trigger: 'blur'
          }
        ],
        // 寄件人手机号校验
        sender_phone: [
          // 必填项校验
          {
            required: true,
            message: '请输入寄件人手机号',
            trigger: 'blur'
          },
          // 手机号格式校验
          {
            pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
            message: '请输入正确的手机号码',
            trigger: 'blur'
          }
        ],
        // 寄件人省市区校验
        sender_district: [
          // 必填项校验
          {
            required: true,
            message: '请选择寄件人省市区',
            trigger: 'change'
          }
        ],
        // 寄件人详细地址校验
        sender_address: [
          // 必填项校验
          {
            required: true,
            message: '请输入寄件人详细地址',
            trigger: 'blur'
          }
        ],
        // 收件人姓名校验
        receiver_name: [
          // 必填项校验
          {
            required: true,
            message: '请输入收件人姓名',
            trigger: 'blur'
          },
          // 长度校验
          {
            min: 3,
            max: 20,
            message: '收件人姓名应长于3字符',
            trigger: 'blur'
          }
        ],
        // 收件人手机号校验
        receiver_phone: [
          // 必填项校验
          {
            required: true,
            message: '请输入收件人手机号',
            trigger: 'blur'
          },
          // 手机号格式校验
          {
            pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
            message: '请输入正确的手机号码',
            trigger: 'blur'
          }
        ],
        // 寄件人省市区校验
        receiver_district: [
          // 必填项校验
          {
            required: true,
            message: '请选择收件人省市区',
            trigger: 'change'
          }
        ],
        // 寄件人详细地址校验
        receiver_address: [
          // 必填项校验
          {
            required: true,
            message: '请输入收件人详细地址',
            trigger: 'blur'
          }
        ],
        // 快件类型校验
        type: [
          // 必填项校验
          {
            required: true,
            message: '请选择快件类型',
            trigger: 'change'
          }
        ],
        // 快件重量校验
        weight: [
          // 必填项校验
          {
            required: true,
            message: '请选择快件重量',
            trigger: 'change'
          }
        ]
      },
      // 省市区数据对象
      options: regionData,
      // 寄件人省市区选择数据对象
      selectedSenderOptions: [],
      // 寄件人省市区选择数据对象
      selectedReceiverOptions: [],
      // Loading显隐
      fullscreenLoading: false,
      // 按钮加载状态
      btnLoading: false
    }
  },

  mounted() {},

  methods: {
    // 寄件人省市区改变处理函数
    senderHandleChange() {
      const area = ['sender_province', 'sender_city', 'sender_district']
      for (let index = 0; index < this.selectedSenderOptions.length; index++) {
        this.form[area[index]] = CodeToText[this.selectedSenderOptions[index]]
        console.log(this.form[area[index]])
      }
    },
    // 收件人省市区改变处理函数
    receiverHandleChange() {
      const area = ['receiver_province', 'receiver_city', 'receiver_district']
      for (let index = 0; index < this.selectedReceiverOptions.length; index++) {
        this.form[area[index]] = CodeToText[this.selectedReceiverOptions[index]]
        console.log(this.form[area[index]])
      }
    },
    // 点击确认寄件处理函数
    clickMailHandler() {
      // 校验表单
      this.$refs.form.validate(async valid => {
        if (valid) {
          // Loading遮罩
          this.fullscreenLoading = true
          // 加载按钮
          this.btnLoading = true
          // 发起网络请求
          mailAPI(this.form)
            .then(({ data }) => {
              console.log(data)
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
              // this.form = this.$options.data().form
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
.mail-container {
  background: #dfdfdf;
  height: 100%;
}
.page-container {
  background: #ffffff;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.form-container {
  padding: 25px;
}
.el-form {
  display: flex;
  flex-direction: column;
  h3 {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    margin-left: 12px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
}
.sender-container,
.receiver-container,
.express-container {
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-around;
  }
}
.el-form-item {
  width: 550px;
  display: flex;
  flex-direction: column;
  /deep/ label {
    font-weight: bold;
  }
}
.express-container {
  .el-form-item {
    margin-left: 12px;
    /deep/ .el-radio__label {
      font-weight: normal;
    }
  }
}
</style>
