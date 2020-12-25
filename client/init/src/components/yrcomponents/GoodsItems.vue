<template>
  <router-link to="/order" class="items">
    <img :src="goods.img" alt="" class="goodsimg" />
    <div v-html="goods.text" class="goodstext"></div>
    <div class="price-order">
        <div class="price">
             <span class="price-icon">￥</span>
             <span v-html="goods.price" class="goodsprice"></span>
             <span class="price-icon">起</span>
        </div>
      <div class="order">立即预定</div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["goods"],
  // methods: {
  //     fn(){
  //         console.log(999);
  //     }
  // },
};
</script>

<style scoped>
.items {
  width: 285px;
  height: 300px;
  background-color: #fff;
  text-decoration: none;
  margin: 0 10px 20px 10px;
}
.goodsimg {
  display: inline-block;
  width: 285px;
  height: 190px;
}
.goodstext {
  display: block;
  width: 256px;
  height: 44px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #333;
  margin-left: 10px;
  margin-top: 6px;
}
.price-order{
    display: flex;
    margin-top: 10px;
}
.price{
    margin-left: 12px;
    margin-right: 68px;
}
.price-icon{
    color: #ff6316;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
}
.goodsprice{
    font-size: 28px;
    color: #ff6316;
}
.order{
    color: #fff;
    float: right;
    display: inline-block;
    width: 100px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 3px;
    transition: all .3s;
    font-size: 15px;
    background: #f60;
    cursor: pointer;
}
.order:hover{
  background-color: rgba(250, 101, 1, 0.7);
}
</style>