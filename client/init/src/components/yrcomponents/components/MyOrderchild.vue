<template>
  <!-- 
左img  右上goodsname  价格price
	text         time
 -->
  <div class="box">
    <div class="before"></div>
    <div class="myorder">
    <img :src="mygoods.img" class="mygoods-img" />
    <div class="middle">
      <div class="mygoods-name">{{ mygoods.goodsname }}</div>
      <div class="mygoods-text">{{ mygoods.text }}</div>
    </div>
    <div class="right">
        <div class="mygoods-price"><span class="price">订单金额：</span><span class="price-icon">￥</span>{{mygoods.price}}</div>
        <div class="mygoods-time"><span class="time">下单时间：</span>{{mygoods.time}}</div>
    </div>
  </div>
    <div class="after"></div>
</div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["mygoods"],
};
</script>

<style scoped>
.after,
.before{
  width: 1200px;
  height: 2px;
  margin: 0 auto;
  margin-top: 12px;
  background-color: rgb(202, 202, 202);
  border-radius: 2px;
}
.before{
   margin-top: 1px;
}
.right{
  margin-top:34px;
}
.mygoods-time{
  margin-top: 92px;
}
.middle{
  border-radius: 3px;
}
.right{
  margin-left: 140px;
}
.myorder{
  margin: 0 auto;
  display: flex;
 margin-top: 20px;

}
.box{
  width: 1200px;
  height: 758px;
  background-color: rgba(17, 173, 201, 0.171);
}
.mygoods-img{
  width: 320px;
  height: 200px;
  border-radius: 3px;
  margin-left:10px;
}
.mygoods-name{
  height: 50px;
  line-height: 86px;
  color: #333;
  font-size: 20px;
  margin-left: 40px;
  color: #ff6316;
  font-weight: 800;
}
.mygoods-text{
  width: 400px;
  height: 130px;
  line-height: 50px;
  margin-top: 30px;
  padding: 0 30px;
  color: rgb(59, 59, 59);
}
.mygoods-price{
    color: #ff6316;
   font-weight: bold;
}
.price{
  color: #333;
}
.price-icon{
  font-size: 12px;
}
.mygoods-time{
  font-weight: bold;
  color: rgb(133, 131, 131);
}
.time{
  color: #333;
}
</style>