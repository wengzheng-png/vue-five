<template>
  <div class="gonglue">
    <!-- 顶部轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px" class="lunbo_box">
      <el-carousel-item v-for="item in arr" :key="item">
        <img :src="item.img" alt="" class="img_big" />
      </el-carousel-item>
    </el-carousel>
    <div class="center">
      <!-- ======================================================================================== -->
      <router-link to="/" class="goshouye">首页</router-link>
      <div class="tehui">超值特惠</div>
      <!-- ======================================================================================== -->
      <div>
        <router-link v-for="el in arr1" :key="el" :to="el.url" class="chuyou">
          <p v-html="el.title"></p>
          <img :src="el.pic" alt="">
          <p v-html="el.info"></p>
        </router-link>
      </div>
      <!-- ======================================================================================== -->
      
</div>
  </div>
</template>

<script>
import img1 from "../../assets/zmimg/gonglue_lunbo1.png";
import img2 from "../../assets/zmimg/gonglue_lunbo2.png";
import img3 from "../../assets/zmimg/2.jpg";
import img4 from "../../assets/zmimg/gonglue1.png";
import img5 from "../../assets/zmimg/gonglue2.jpg";
import img6 from "../../assets/zmimg/gonglue3.jpg";

export default {
  data() {
    return {
      /* 注册组件 */
      arr: [
        { img: img1, url: "/#?九寨沟" },
        { img: img2, url: "九寨沟" },
        { img: img3, url: "九寨沟" },
      ],
      /* 第一个商品盒子 */
      arr1: [
        {
          title: "自驾",
          pic:img4,url:"gonginfo?url=九寨沟",
          info:
            "什么是九寨沟九环线？九环线以成都为始发点，分东西两线前往九寨沟，是乘汽车从成都到…据交通运输部微信公众号消息，经国务院同意，从5月6日零时起，全国收费公路将恢复收…",
        },
        {
          title: "自驾",
          pic:img5,url:"gonginfo?url=稻城亚丁",
          info:
            "什么是九寨沟九环线？九环线以成都为始发点，分东西两线前往九寨沟，是乘汽车从成都到…据交通运输部微信公众号消息，经国务院同意，从5月6日零时起，全国收费公路将恢复收…",
        },
        {
          title: "自驾",
          pic:img6,url:"gonginfo?url=毕棚沟",
          info:
            "什么是九寨沟九环线？九环线以成都为始发点，分东西两线前往九寨沟，是乘汽车从成都到…据交通运输部微信公众号消息，经国务院同意，从5月6日零时起，全国收费公路将恢复收…",
        }
      ],
    };
  },

  components: {},
  methods: {},
  mounted() {},
};
</script>
<style  scoped>
.center {
  width: 1200px;
  margin: 0 auto;
}
.gonglue {
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
  background-color: rgb(234, 253, 253);
}
/* 轮播图 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lunbo_box {
  background-color: #fff;
  margin: 5px;
}
.img_big {
  width: 900px;
  height: 200px;
}
/* 超值特惠 */
.tehui {
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 20px;
  color: #475669;
  border-bottom: 1px solid #ccc;
}
.goshouye {
  color: #475669;
  padding: 20px;
}

.chuyou {
  color: #686868;
}
  
</style>
