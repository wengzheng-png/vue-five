<template>
  <div class="main">
    <div class="register">
    <div class="reg-left">
      <h3 class="title">手机注册</h3>
      <span class="regtext">登录账号:</span>
      <input type="text" v-model="tel" placeholder="请输入手机号" @change="ftel($event)"/>
      <span>{{teltis}}</span> <br />

      <span class="regtext">密码:</span>
      <input type="text" v-model="pwd" placeholder="请输入登录密码,以字母开头" @change="fpwd($event)" />
      <span>{{pwdtis}}</span><br />

      <span class="regtext">确认密码:</span>
      <input type="text" v-model="cfmpwd" placeholder="请再次输入登录密码" @change="fcfmpwd($event)" />
      <span>{{cfpwdtis}}</span><br />

      <span class="regtext">昵称:</span>
      <input type="text" v-model="nickname" /><br />

      <span class="regtext">个性签名:</span>
      <input type="text" v-model="label" /><br />

      <button class="btn" @click="fn">立即注册</button>
    
    </div>

    <div class="reg-right">
        <div class="ri-box">
          <span>已有账号</span>
          <router-link to="/login">立即登录</router-link>
          <p>使用其他登录方式</p>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      pwd: "",
      cfmpwd: "",
      nickname: "",
      label: "",
      teltis:"",
      pwdtis:"",
      cfpwdtis:""
    };
  },
  methods: {

    // 前端表单验证
    ftel(e){
        if(!(/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/.test(this.tel))){ 
          this.teltis = "请输入正确的手机号格式"
        }
        else{
           this.teltis = "账号格式正确"
        }
    },
    fpwd(){

      if( ! (/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(this.pwd))){
          this.pwdtis = "密码以字母开头且不少于六位"
      }else{
         this.pwdtis = "密码格式正确"
      }
    },
    fcfmpwd(){
      if(this.pwd != this.cfmpwd){
          this.cfpwdtis = "前后输入密码不一致"
      }else{
        this.cfpwdtis ="密码前后一致"
      }
    },


  //网络请求 
    fn() {
      // 前端验证被我挂载到生命周期函数里面去了，还在有很大的bug  需要调试
      var url = "/register";
      var data = {
        tel: this.tel,
        pwd: this.pwd,
        nickname: this.nickname,
        label: this.label,
      };
      this.$axios.post(url, data)
      .then((res) => {
        if (res.data.code == 2001) {
          this.$router.push("/login");   //路由跳转  先跳到首页
        } else {
          alert("手机号码已被注册过！请重新注册");
        }
      });
    },
  },

};
</script>

<style scoped>
    *{
      margin: 0;
      padding: 0;
    }
    .main {
      width: 100%;
      height: 540px;
      background-image: url("../../assets/ws/loginbg.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
}
    .register {
      width:800px;
      margin-left: 650px;
      background-color: rgba(0, 0, 0, .1);
      display: flex;
      position: relative;
      top: 50px;
      border-radius: 20px;
    }
    .reg-left  {
      width: 600px;
      height: 400px;
    }
    .title {
      width: 380px;
      height: 30px;
      color: #FC6000;
      padding-left: 28px;
      margin: 20px 0;
      border-bottom: 2px solid #FC6000;
      box-sizing: border-box;
    }
    .regtext {
      display: inline-block;
      width: 100px;
      height: 30px;
      text-align: right;
    }
    input{
      width: 250px;
      height: 30px;
      outline: none;
      margin: 5px;
      padding-left: 15px;
      box-sizing: border-box;
    }
    .btn {
       width: 250px;
       height: 35px;
       background-color: #2577E3;
       border: none;
       margin: 10px 107px;
    }
    .reg-right {
      margin-top: 50px;
      height: 300px;
      border-left: 2px solid #ccc;
    }
    .ri-box {
      width: 200px;
      height: 100px;
      margin-top: 250px;
      margin-left: 20px;
    }
</style>>
