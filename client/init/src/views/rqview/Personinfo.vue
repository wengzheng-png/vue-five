<template>
    <div>
<h1>用户信息页面</h1>
<div v-if="personinfo.id">
 <Userinfo :personinfo="personinfo" :personinfo1="personinfo1"></Userinfo>
</div>
<div v-else >
    <router-link to="/loginrj">请先登录</router-link>
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
           console.log(this.personinfo,123);
           console.log(this.personinfo1,12345);
        },
        components:{
            Userinfo:()=>import('@/components/rqcomponents/Userinfo.vue')
        }
    }
</script>

<style scoped>
div{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
</style>