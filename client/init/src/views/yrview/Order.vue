<template>
  <div class="box">
    <img src="@/assets/yrimg/goods.jpg" alt="" class="goodsimg" />
    <div class="right">
      <div class="name">
        【九寨涅槃】九寨沟 黄龙 都江堰 松坪沟 熊猫基地 叠溪海子
        牟尼沟4~6人3日之旅
      </div>
      <div class="text">
        九寨归来不看水”，是对九寨沟景色真实的诠释；黄龙--中国唯一保护完好的高原湿地，被誉为“人间瑶池”；都江堰--全世界迄今为止，年代最久、唯一留存、仍在一直使用、以无坝引水为特征的宏大水利工程；
      </div>
      <div class="cargoods-price">
        <span class="price-icon">￥</span>1280<span class="price-icon">起</span>
      </div>
      <div class="order">立即预定</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.right {
  width: 660px;
  height: 300px;
}
.box {
  width: 100%;
  height: 300px;
  display: flex;
  background-color: rgb(247, 244, 244);
  box-sizing: border-box;
  padding: 32px;
}
.name {
    font-size: 18px;
    color: #323232;
    margin-bottom: 20px;
}
.text{
    color: #999;
    font-size: 12px;
}
.goodsimg {
  display: inline-block;
  width: 285px;
  height: 190px;
  margin-right: 20px;
}
.price-icon {
  line-height: 40px;
  padding-left: 10px;
  font-size: 14px;
}
.cargoods-price {
  font-size: 24px;
  font-weight: 500;
  color: #fc6000;
  width: 230px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  background: #fff4e4;
  margin: 20px 0 20px 10px;

}
.order {
  color: #fff;
  width: 120px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 3px;
  transition: all 0.3s;
  font-size: 15px;
  background: #f60;
  cursor: pointer;
}
.order:hover {
  background-color: rgba(250, 101, 1, 0.7);
}
</style>