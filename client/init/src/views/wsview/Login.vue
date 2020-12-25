<template>
    <div class="main">
        <div class="login">
        <div class="login-left">
            <h3 class="title">登录</h3>

            <span class="logintext">账号:</span>
            <input type="text" class="loginput" v-model="tel" placeholder="请输入账号"><br>

             <span class="logintext">密码:</span>
             <input type="text" class="loginput" v-model="pwd" placeholder="请输入密码"><br>

            <span class="logintext">验证码:</span>
            <input type="text" class="yanzm" v-model="verif">
            <span v-html="resverif" @click="fm" class="yzm"></span><br>
           
            <button @click="fn()" class="btn">登录</button><br>
            
        </div>
         <div class="login-right">
        <div class="login-box">
        <div><router-link to="/forgetpwd">忘记密码</router-link></div>
          <span>还没有账号：</span>
          <router-link to="/register">立即注册</router-link>
        </div>
    </div>

    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tel:"",
                pwd:"",
                verif:"",
                resverif:"验证码",
                msg:"ll"
            }
        },
        methods:{
            // 验证码
            fm(){
                var url = "/verif"
                this.$axios.get(url,{withCredentials: true})
                .then((res)=>{
                    this.resverif = res.data
                })
            },
            // 登录验证
            fn(){
                var url = "/login"
                var data = {
                    tel:this.tel,
                    pwd:this.pwd,
                    verif:this.verif
                }
               this.$axios.post(url,data,{withCredentials: true})
                .then((res)=>{
                    console.log(res);
                    // 前端收到后端返回的数据标识，进行判断
                    if(res.data.code==2003){
                        // 登录成功跳转页面   需要应该路由守卫
                        this.$router.push("/home")
                    }else if(res.data.code==4003){
                        // 登录失败   提示用户账号或者密码错误
                        alert("账号或者密码错误!!!!")

                    }else{
                        alert("验证码输入有误！")
                    }
                })
            }
        },

        mounted(){
             var url = "/verif"
                this.$axios.get(url,{withCredentials: true})
                .then((res)=>{
                    this.resverif = res.data
                })
        }

        
    }
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
.login {
      width:800px;
      margin-left: 650px;
      background-color: rgba(0, 0, 0, .1);
      display: flex;
      position: relative;
      top: 50px;
      border-radius: 20px;
    }
    .login-left  {
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
    .logintext {
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
    .yanzm {
        width: 140px;
    }
    .yzm {
        position: relative;
        top: 14px;
        left: 5px;
    }

    .btn {
       width: 250px;
       height: 35px;
       background-color: #2577E3;
       border: none;
       margin: 10px 107px;
       color: #fff;
       font-size: 20px;
    }
    .login-right {
      margin-top: 50px;
      height: 300px;
      border-left: 2px solid #ccc;
    }
    .login-box {
      width: 200px;
      height: 100px;
      margin-top: 250px;
      margin-left: 20px;
    }

</style>