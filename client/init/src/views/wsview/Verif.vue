<template>
    <div>
        <h1>验证码</h1>
        Verif：<input type="text" v-model="verif"><span v-html="ref"></span>
        <button @click="fn">登录</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                verif:"",
                ref:""
            }
        },
        methods:{
            fn(){
                // console.log( this.$refs.img);
                // 请求验证码
                this.$axios("/verif")
                .then((res)=>{
                   this.ref =  res.datas
                    // console.log(res);
                })
            }
        }

        
    }
</script>

<style scoped>
    /*
     缓存的使用和原理：
     前端登录成功后
     可以把这个函数调用时：可以把用户传上来的信息缓存起来
     只要缓存了的数据，就可以在其他接口中直接获取缓存的数据
    this.ctx.session.缓存的字段  = this.ctx.request.body.对应缓存的字段
     

     怎样去取出缓存的数据
     在后端调试过程中，直接打印   怎么存的缓存  就怎么取
     console.log(this.ctx.session.缓存的字段)


     后端退出登录的方式
     后端把缓存的账号和密码置为空，就可以退出登录了
     例如：
     this.ctx.session.username = null
     this.ctx.session.pwd = null



     */
</style>
