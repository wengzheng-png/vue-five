<template>
    <div>

<Lunbo></Lunbo>
<div class="toshou"><router-link to="/" class="shou">首页</router-link> &nbsp;&nbsp;>&nbsp;&nbsp;<span class="jing">景点门票</span> </div>
<Menpiao></Menpiao>
<Tuijian></Tuijian>
    </div>
</template>

<script>
    export default {
        components:{
            Lunbo:()=>import('@/components/rqcomponents/Lunbo.vue'),
            Menpiao:()=>import('@/components/rqcomponents/Menpiao.vue'),
            Tuijian:()=>import('@/components/rqcomponents/Tuijian.vue')
        }
    }
</script>

<style lang="scss" scoped>
.toshou {
    position: relative;
    top: 15px;
    left: 215px;
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