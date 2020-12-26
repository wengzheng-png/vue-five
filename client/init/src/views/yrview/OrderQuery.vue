<template>
  <div class="container">
    <div class="navtitle">
      <router-link to="/" class="return">首页</router-link>
      <span class="return-icon">></span>
      <span class="dingdan">订单查询</span>
    </div>
    <div class="content">
      <h3>订单查询</h3>
      <ul>
        <li class="phone-li">
          <strong class="phone-tip">手机号码：</strong>
          <input type="text" class="phone" id="phone" value=""  v-model="phone"/>
        </li>
        <li class="phone-li2">
          <strong class="verif-tip">图片验证码：</strong>
          <input type="text" class="vcode" id="verif" value=""  v-model="verif"/><span id="img" v-html="img" @click="fn1"></span>
        </li>
      </ul>
      <div class="btn" @click="fn2">开始查询</div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
      phone:"",
      verif:"",
      img:""
   }
 },
methods: {
    getVerif(){
      // 获取验证码节点
      this.$axios("/getVerif",{withCredentials: true}).then((res)=>{
        // console.log(res.data);
        this.img = res.data
      })
  },
  fn1(){
    this.getVerif()
  },
  // 查询按钮
  async fn2(){
    // 获取用户数据
    // 前端验证
    // 发给后端
    var url = "/orderquery"
    var data = {
      phone: this.phone,
      verif: this.verif
    }
    var res = await this.$axios.post(url,data,{withCredentials: true})
    // console.log(res);
    if(res.data.code==2002){
        this.$router.push("/myOrder")
    }else if(res.data.code==4002){
      alert("验证码错误")
    }else if(res.data.code==4003){
        alert("您还没有订单")
    }
  }
 },

 mounted() {
  this.getVerif()
   
 },
}
</script>

<style scoped>
.navtitle {
  height: 30px;
  padding: 16px 0 6px 0;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.content {
  text-align: center;
  width: 1118px;
  height: 310px;
  padding: 20px 40px;
  border: 1px solid #d8d8d8;
}
.return {
  color: #666;
  font-size: 12px;
  text-decoration: none;
}
.return-icon,
.dingdan {
  font-size: 12px;
  color: #999;
  margin-left: 6px;
}
h3 {
  color: #313131;
  font-size: 24px;
  font-weight: normal;
}
input {
  width: 200px;
  height: 35px;
  line-height: 35px;
  padding: 0 5px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
}

.phone-tip,
.verif-tip {
  color: #333;
  display: inline-block;
  font-weight: normal;
}
.phone-li {
  position: relative;
  left: 8px;
}
h3,
ul,
li {
  margin-top: 20px;
}
#img{
  position: relative;
  top: 16px;
  left: 10px;
}
.phone-li2{
  margin-left: 86px;
}
.btn{
    color: #fff;
    width: 110px;
    height: 35px;
    line-height: 35px;
    margin: 30px 0 0 501px;
    font-size: 14px;
    border-radius: 5px;
    background: #0082dd;
    cursor: pointer;
}
.btn:hover{
  background-color: rgba(22, 127, 212, 0.8);
}
</style>