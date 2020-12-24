<template>
  <div class="hello">
    <div class="one_goods_nav">
      <div class="one_box_left">
        <router-link class="one_goods_info">
          <img
            :src="el.img_jingdian"
            :title="el.text_jianjie"
            class="img_jingdian"
          />
          <div v-html="el.text_jianjie" class="text_jianjie"></div>
          <div class="hot_img">
            <img :src="el.img_hot" alt="" />
            <img :src="el.img_qianggou" alt="" />
            <img :src="el.img_miyue" alt="" />
            <img :src="el.img_bamayou" alt="" />
            <img :src="el.img_chunyouwan" alt="" />
          </div>
          <div class="hot_price">
            <span v-html="el.price_yuan" class="price_yuan"></span>
            <span v-html="el.price_xain + ' 起'" class="price_xian"></span>
          </div>
        </router-link>
      </div>
      <div class="one_box_right">
        <img src="../../assets/zmimg/11.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped >
.one_goods_nav {
  font-size: 14px;
  width: 1200px;
  min-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.one_box_left {
  width: 916px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.one_goods_info {
  max-width: 285px;
  margin-bottom: 20px;
}
.img_jingdian {
  max-width: 285px;
  max-height: 194px;
  vertical-align: middle;
}
.text_jianjie {
  /* column-count: 2;
  text-overflow: ellipsis; */
  overflow: hidden;
  height: 40px;
  margin: 5px;
}
.one_goods_info:visited {
  color: blue;
}
.hot_img img {
  margin: 5px;
}
.hot_price {
  display: flex;
  justify-content: space-between;
}
.price_yuan {
  text-decoration: line-through;
  font-size: 16px;
  color: #333;
}
.price_xian {
  font-size: 16px;
  color: #fc6000;
  font-weight: 600;
}
</style>
