<template>
  <div class="main">
    <div class="forgetpwd">
      <div class="forgetpwd-left">
        <h3 class="title">忘记密码</h3>
        <span class="forgetpwdtext">输入账号:</span>
        <input type="text" class="forgetpwdput" v-model="tel" placeholder="请输入账号" />
        <span>{{youinputtel}}</span><br />

        <span class="forgetpwdtext">新密码:</span>
        <input type="text" class="forgetpwdput" v-model="newpwd" placeholder="请输入密码" /><br />

        <span class="forgetpwdtext">确定密码:</span>
        <input type="text" class="forgetpwdput" v-model="cfpwd" placeholder="请输入密码" />
        <span>{{same}}</span><br />

        <button @click="fn()" class="btn">立即修改</button><br />
      </div>

      <div class="forgetpwd-right">
        <div class="forgetpwd-box">
          <router-link to="/login">返回登陆</router-link>
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
      newpwd: "",
      cfpwd:"",
      same:"",
      youinputtel:""
    };
  },
  methods: {
    async fn() {
      // 先判断前后输入密码是否一致
      if(this.newpwd != this.cfpwd) {
            this.same = "前后密码不一致！"
        }else{
        var url = "/forgetpwd"
        var data = {
            tel: this.tel,
            newpwd: this.newpwd,
        }
      var res = await this.$axios.post(url,data);
      console.log(res.data.code);
      if(res.data.code == 2004){
        this.same = "密码修改成功！"
          this.$router.push("/login");
      }else{
          this.youinputtel = "账号不存在！！"
      }
      
          
        }

        
    },

  },
};
</script>

<style scoped>
* {
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
.forgetpwd {
  width: 800px;
  margin-left: 650px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  position: relative;
  top: 50px;
  border-radius: 20px;
}
.forgetpwd-left {
  width: 600px;
  height: 400px;
}
.title {
  width: 380px;
  height: 30px;
  color: #fc6000;
  padding-left: 28px;
  margin: 20px 0;
  border-bottom: 2px solid #fc6000;
  box-sizing: border-box;
}
.forgetpwdtext {
  display: inline-block;
  width: 100px;
  height: 30px;
  text-align: right;
}
input {
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
  background-color: #2577e3;
  border: none;
  margin: 10px 107px;
  color: #fff;
  font-size: 20px;
}
.forgetpwd-right {
  margin-top: 50px;
  height: 300px;
  border-left: 2px solid #ccc;
}
.forgetpwd-box {
  width: 200px;
  height: 100px;
  margin-top: 250px;
  margin-left: 20px;
}
</style>