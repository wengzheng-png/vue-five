<template>
    <div class="box1">
<div v-if="personinfo.id">
<div class="toshou"><router-link to="/" class="shou">首页</router-link> &nbsp;&nbsp;>&nbsp;&nbsp;<span class="jing">个人中心</span> </div>

 <Userinfo :personinfo="personinfo" :personinfo1="personinfo1"></Userinfo>
</div>
<div v-else >
    <div class="weideng">
    <p class="tixing">您还未登录，请先登录！！！</p>
    <button class="btn1"><router-link to="/login" class="routo">登录</router-link></button>
    <button class="btn1"><router-link to="/" class="routo" >取消</router-link></button>
    </div>
    
   
</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                personinfo:{},
                personinfo1:"",
            }
        },
      async mounted() {
           let res = await this.$axios("/personinfo");
           this.personinfo = res.data.res[0];
           this.personinfo1 = res.data.res1[res.data.res1.length-1].pic;
           
        },
        components:{
            Userinfo:()=>import('@/components/rqcomponents/Userinfo.vue')
        }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.box1{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    background-color: rgba(165, 161, 161, 0.205);
}

.weideng{
    position: relative;
    width: 350px;
    height: 200px;
    margin: 0 auto;
    background-color: rgba(94, 129, 224, 0.3);
    box-sizing: border-box;
    border-radius: 20px;
    padding-top: 30px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 50px 500px;
}


.tixing{
    width: 250px;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    margin: auto;
    margin-top: 30px;
}

.routo{
    text-decoration: none;
    color: #363636;
}

.btn1 {
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: #363636;
    margin: 10px;
    margin-top: 30px;
}

.toshou {
    position: relative;
    top: 15px;
    left: 80px;
    width: 300px;
}
.shou {
    text-decoration: none;
    color: #456;
    margin-right: 10px;
}
.jing {
    display: inline-block;
    margin-left: 10px;
}
</style>