<template>
    <div>
    <h1>登录页面</h1>
<!-- v-model 双向绑定的value -->
tel:<input type="text" v-model="tel"><br>
pwd：<input type="text" v-model="pwd"><br>
<button @click="fn">登录</button>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                tel:"",
                pwd:""
            }
        },
        methods: {
            //注册前，前端表单验证
           async fn(){
                let url = "/longinrj";//后端的网址
                let data = {tel:this.tel,
                            pwd:this.pwd
                };
               var res =  await this.$axios.post(url,data);
               console.log(res);
               if(res.data.code == 2002){
                   //前端缓存
                window.localStorage.setItem("已登录",100);
                this.$router.push("/personinfo")
                   
               }if(res.data.code == 4002){
                   alert("邮箱或密码错误")
               }
            }
        }
    }
</script>

<style scoped>

</style>