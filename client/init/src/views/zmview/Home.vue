<template>
  <div class="home">
    <!-- 顶部轮播图 -->
    <div class="block">
      <el-carousel height="420px">
        <el-carousel-item v-for="item in arr" :key="item">
          <router-link :to="item.url">
            <img :src="item.img" alt="" class="img_big" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 第一个商品详情框 -->
    <div class="tow">
      <div class="tow_nav">
        <img src="../../assets/zmimg/gps.png" alt="" class="li_img1" /><span
          class="span_text"
          >活动</span
        >
      </div>
      <div class="tow_nav2" @click="fn">
        <router-link to="#?四川"
          ><div
            class="palce"
            style="border-bottom: 3px solid #2577e3 !important; color: #2577e3"
          >
            四川
          </div></router-link
        >
        <router-link to="#?西藏"><div class="palce">西藏</div></router-link>
        <router-link to="#?西北"><div class="palce">西北</div></router-link>
        <router-link to="#?云南"><div class="palce">云南</div></router-link>
        <router-link to="#?贵州"><div class="palce">贵州</div></router-link>
      </div>
      <!-- 跳转到活动 -->
      <router-link to="#">
        <div class="look_more">
          <span class="el-icon-circle-plus-outline"></span> 查看更多
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/zmimg/1.png";
import img2 from "../../assets/zmimg/2.jpg";
import img3 from "../../assets/zmimg/3.jpg";
import img4 from "../../assets/zmimg/4.jpg";
import img5 from "../../assets/zmimg/5.jpg";
export default {
  data() {
    return {
      arr: [
        { img: img1, url: "/#?九寨沟" },
        { img: img2, url: "九寨沟" },
        { img: img3, url: "九寨沟" },
        { img: img4, url: "九寨沟" },
        { img: img5, url: "九寨沟" },
      ],
      arr1: [],
    };
  },
  name: "Home",
  components: {},
  methods: {
    fn(e) {
      var arr = e.currentTarget.children;
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].children[0]);
        arr[i].children[0].style =
          "border-bottom: 3px solid #fff;color: rgb(24, 23, 23)";
      }
      console.log(e.target, 1111);
      e.target.style =
        "border-bottom: 3px solid #2577e3 !important;color:#2577e3";
    },
  },
  mounted() {
    // 请求第1-5条商品信息
    this.$Axios("/goods1").then((res) => {
      console.log(res.data)
      this.arr1 = res.data;
    });
  },
};
</script>
<style  scoped>
.home {
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;
}

.block,
.img_big {
  width: 1900px;
  height: 420px;
  margin: 0 auto;
}

/* 第二个商品框 */
.tow {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
}
.tow_nav {
  line-height: 60px;
  display: flex;
  padding-top: 10px;
  margin-right: 140px;
}
.li_img1 {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.look_more {
  line-height: 60px;
  color: #181717;
  margin-left: 515px;
}
.look_more:hover {
  color: #ff8800;
}
.span_text {
  font-size: 20px;
  font-weight: 800;
  color: #2577e3;
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
}
.tow_nav2 {
  line-height: 60px;
  display: flex;
}
.palce {
  padding: 0 20px;
  color: rgb(24, 23, 23);
  position: relative;
  z-index: 1;
  height: 58px;
}
</style>
