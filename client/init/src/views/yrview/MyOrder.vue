<template>
  <div class="myOrder">
    <div class="navtitle">
      <router-link to="/" class="return">首页</router-link>
      <span class="return-icon">></span>
      <span class="dingdan">我的订单</span>
    </div>
    <div class="tour-dev">
      <span class="title1">订单详情</span>
      <span class="title2">共计<em>1</em>个订单</span>
    </div>
<!-- 订单详情 -->
      <div class="flexgoods">
      <MyOrderchild v-for="el in arr" :mygoods="el" :key="el.id" class="mygoods-item"></MyOrderchild>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    mounted() {
      var phone 
        this.$axios.post("/myorder",phone,{withCredentials: true}).then((res)=>{
            console.log(res);
            this.arr = res.data
        })
    },
    components:{
        MyOrderchild:()=>import("@/components/yrcomponents/MyOrderchild.vue")
    }
};
</script>

<style scoped>
.myOrder {
  width: 100%;
  /* margin: 0 auto; */
  height: 890px;
  background-color: rgb(246, 246, 246);
}
.navtitle {
  height: 30px;
  margin-left: 100px;
  padding: 16px 0 6px 0;
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
.tour-dev {
  width: 1200px;
  height: 50px;
  color: #333;
  background-color: #fff;
  margin: 0 auto;
  line-height: 50px;
}
em {
  color: #07cd5a;
  font-weight: bold;
}
.title1 {
  font-size: 12px;
  margin-left: 20px;
  color: red;
}
.title2 {
  font-size: 14px;
  margin-left: 20px;
}
.flexgoods {
  height: 620px;
  width: 1220px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 30px;
}
.mygoods-item {
  height: 318px;
  width: 1220px;
  box-sizing: border-box;
}
</style>