<template>
  <div class="home">
    <!-- 顶部轮播图 -->
    <div class="block">
      <el-carousel height="420px" :interval="5000">
        <el-carousel-item v-for="item in arr" :key="item">
          <router-link :to="item.url">
            <img :src="item.img" alt="" class="img_big" />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- ======================================================================================== -->
    <!-- 活动 -->
    <div class="tow">
      <div class="tow_nav">
        <img src="../../assets/zmimg/gps.png" alt="" class="li_img1" /><span
          class="span_text"
          >活动</span
        >
      </div>
      <div class="tow_nav2" @click="fn">
        <div
          data-index1="0,6"
          class="palce"
          style="border-bottom: 3px solid #2577e3 !important; color: #2577e3"
        >
          四川
        </div>
        <div class="palce" data-index1="6,12">西藏</div>
        <div class="palce" data-index1="12,18">西北</div>
        <div class="palce" data-index1="18,24">云南</div>
        <div class="palce" data-index1="24,30">贵州</div>
      </div>
      <!-- 跳转到活动 -->
      <router-link to="#">
        <div class="look_more">
          <span class="el-icon-circle-plus-outline"></span> 查看更多
        </div>
      </router-link>
    </div>
    <!-- 商品 -->
    <div class="one_goods_nav">
      <div class="one_box_left">
        <!-- <router-link to="#?毕棚沟"></router-link> -->
        <router-link
          v-for="el in arr2"
          to="#"
          :key="el.id"
          class="one_goods_info"
        >
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
            <span v-html="el.price_xain" class="price_xian"></span>
          </div>
        </router-link>
      </div>
      <div class="one_box_right">
        <img src="../../assets/zmimg/11.png" alt="" />
      </div>
    </div>
    <!-- 第一个分隔 -->
    <div class="fenge1">
      <img src="../../assets/zmimg/10.png" alt="" />
    </div>

    <!-- ======================================================================================== -->
    <!-- 攻略 -->
    <div class="tow">
      <div class="tow_nav">
        <img src="../../assets/zmimg/gongnue.png" alt="" class="li_img1" /><span
          class="span_text"
          >攻略</span
        >
      </div>
      <div class="tow_nav2" @click="fm">
        <div
          class="palce ZuiJingGongLue"
          style="border-bottom: 3px solid #2577e3 !important; color: #2577e3"
        >
          最近攻略
        </div>
        <div class="palce Zhoubian">成都周边游</div>
        <div class="palce SiChuan">四川</div>
        <div class="palce ChengDu">成都</div>
        <div class="palce Xizang">西藏</div>
        <div class="palce XiBei">西北</div>
        <div class="palce YunNan">云南</div>
      </div>
      <!-- 跳转到攻略 -->
      <router-link to="/gonglue" class="more">
        <div class="look_more">
          <span class="el-icon-circle-plus-outline"></span> 更多攻略
        </div>
      </router-link>
    </div>
    <!-- 商品 -->
    <div class="one_goods_nav">
      <components :is="com"></components>
    </div>
    <!-- 第二个分隔 -->
    <div class="fenge1">
      <img src="../../assets/zmimg/6.png" alt="" />
    </div>

    <!-- ======================================================================================== -->
    <!-- 游记 -->
    <div class="tow">
      <div class="tow_nav">
        <img src="../../assets/zmimg/youji.png" alt="" class="li_img1" /><span
          class="span_text"
          >游记</span
        >
      </div>

      <!-- 跳转到游记 -->
      <router-link to="#">
        <div class="look_more">
          <span class="el-icon-circle-plus-outline"></span> 查看游记
        </div>
      </router-link>
    </div>
    <div class="youji_box">
      <router-link to="#" v-for="el in arr3" :key="el.id" class="youji_nav">
        <img :src="el.img1" :alt="el.title" class="youji_img1" />
        <div v-html="el.title" class="youji_title"></div>
        <div v-html="el.descrption" class="youji_descrption"></div>
        <img :src="el.pic2" alt="" class="touxaing" />
      </router-link>
    </div>

    <!-- ======================================================================================== -->
    <!-- 酒店代订  -->
    <div class="tow">
      <div class="tow_nav">
        <img src="../../assets/zmimg/jiudian.png" alt="" class="li_img1" /><span
          class="span_text"
          >酒店代订</span
        >
      </div>
      <div class="tow_nav2" @click="hotel">
        <div
          data-index2="0,6"
          class="palce"
          style="border-bottom: 3px solid #2577e3 !important; color: #2577e3"
        >
          四川
        </div>
        <div class="palce" data-index2="6,12">西藏</div>
        <div class="palce" data-index2="12,18">新疆</div>
        <div class="palce" data-index2="18,24">贵州</div>
        <div class="palce" data-index2="24,30">云南</div>
        <div class="palce" data-index2="30,36">西北</div>
      </div>
      <!-- 跳转到酒店代订-->
      <router-link to="#">
        <div class="look_more">
          <span class="el-icon-circle-plus-outline"></span> 酒店代订
        </div>
      </router-link>
    </div>
    <!-- 商品 -->
    <div class="one_goods_nav">
      <div class="one_box_left">
        <!-- <router-link to="#?毕棚沟"></router-link> -->
        <router-link
          v-for="el in arr5"
          to="#"
          :key="el.id"
          class="one_goods_info"
        >
          <img
            :src="el.img_jingdian"
            :title="el.text_jianjie"
            class="img_jingdian"
          />
          <div v-html="el.text_jianjie" class="text_jianjie"></div>
          <div class="hot_price">
            <span v-html="el.price_yuan" class="price_yuan"></span>
            <span v-html="el.price_xain" class="price_xian"></span>
          </div>
        </router-link>
      </div>
      <div class="one_box_right">
        <img src="../../assets/zmimg/111.png" alt="" />
      </div>
    </div>
    <!-- 第一个分隔 -->
    <div class="fenge1">
      <img src="../../assets/zmimg/9.png" alt="" />
    </div>

    <!-- ======================================================================================== -->
    <!-- 景点门票  -->
    <div class="tow">
      <div class="tow_nav">
        <img src="../../assets/zmimg/menpiao.png" alt="" class="li_img1" /><span
          class="span_text"
          >景点门票</span
        >
      </div>
      <div class="tow_nav2" @click="piao">
        <div
          data-index3="0,6"
          class="palce"
          style="border-bottom: 3px solid #2577e3 !important; color: #2577e3"
        >
          四川
        </div>
        <div class="palce" data-index3="6,12">西藏</div>
        <div class="palce" data-index3="12,18">西北</div>
        <div class="palce" data-index3="18,24">云南</div>
        <div class="palce" data-index3="24,30">内蒙</div>
        <div class="palce" data-index3="30,36">东北</div>
      </div>
      <!-- 跳转到酒店代订-->
      <router-link to="#">
        <div class="look_more">
          <span class="el-icon-circle-plus-outline"></span> 景点门票
        </div>
      </router-link>
    </div>
    <!-- 商品 -->
    <div class="one_goods_nav">
      <div class="one_box_left">
        <!-- <router-link to="#?毕棚沟"></router-link> -->
        <router-link
          v-for="el in arr7"
          to="#"
          :key="el.id"
          class="one_goods_info"
        >
          <img
            :src="el.img_jingdian"
            :title="el.text_jianjie"
            class="img_jingdian"
          />
          <div v-html="el.text_jianjie" class="text_jianjie"></div>
          <div class="hot_price">
            <span v-html="el.price_yuan" class="price_yuan"></span>
            <span v-html="el.price_xain" class="price_xian"></span>
          </div>
        </router-link>
      </div>
      <div class="one_box_right">
        <img src="../../assets/zmimg/menpiao.jpg" alt="" />
      </div>
    </div>
    <!-- 最后一个分隔 -->
    <div class="fenge1">
      <img src="../../assets/zmimg/18.png" alt="" />
    </div>

    <!-- ======================================================================================== -->
    <!-- 侧边导航栏 -->
    <div class="fix_nav">
      <div class="phone_nav">
        <div @mouseenter="phoneNav">
          <img src="../../assets/zmimg/phone.png" alt="" class="phone_img" />
          <div class="phone_text">免费电话</div>
        </div>
        <!-- 划过出现 -->
        <div class="phone_hover">
          <div @click="telx" class="cha">x</div>
          <!-- 获取用户电话号码 -->
          <input
            type="text"
            v-model="phone"
            placeholder="请输入您的电话号码"
            class="phone_input"
          />
          <button @click="tel" class="phone_button">立即免费通话</button>
          <div class="text_phone_hover">
            输入你的电话号码，点击免费通话，稍后我们将与您联系，此次通话讲不好收取您任何费用，请注意接通
          </div>
        </div>
      </div>
      <div class="zhanwei"></div>
      <ul>
        <li class="dingwei dingwei1">
          <div class="tonxun_nav">
            <div class="sanjiao sanjiao1"></div>
            <img class="tongxun" src="../../assets/zmimg/qq.png" alt="" />
          </div>
          <div class="dingwei_son dingwei_son1">qq咨询:256479854</div>
        </li>
        <li class="dingwei dingwei2">
          <div class="tonxun_nav">
            <div class="sanjiao sanjiao2"></div>
            <img class="tongxun" src="../../assets/zmimg/dainhua.png" alt="" />
          </div>
          <div class="dingwei_son dingwei_son2">客服电话：12549876322</div>
        </li>
        <li class="dingwei dingwei3">
          <div class="tonxun_nav">
            <div class="sanjiao sanjiao3"></div>
            <img class="tongxun" src="../../assets/zmimg/wx.png" alt="" />
          </div>
          <div class="dingwei_son dingwei_son3">
            <img src="../../assets/zmimg/erweima.png" alt="" />
          </div>
        </li>
        <li class="dingwei dingwei4">
          <div class="tonxun_nav">
            <div class="sanjiao sanjiao4"></div>
            <img
              class="tongxun"
              src="../../assets/zmimg/wb.png"
              alt=""
              style="border-bottom: 1px solid #ccc"
            />
          </div>
          <div class="dingwei_son dingwei_son4">关注官方微博：</div>
        </li>
      </ul>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/zmimg/1.png";
import img2 from "../../assets/zmimg/2.jpg";
import img3 from "../../assets/zmimg/3.jpg";
import img4 from "../../assets/zmimg/4.jpg";
import img5 from "../../assets/zmimg/5.jpg";
import img6 from "../../assets/zmimg/10.png";
import ZuiJingGongLue from "../zmview/gonglue/ZuiJingGongLue.vue";
import Zhoubian from "../zmview/gonglue/Zhoubian.vue";
import SiChuan from "../zmview/gonglue/SiChuan.vue";
import ChengDu from "../zmview/gonglue/ChengDu.vue";
import Xizang from "../zmview/gonglue/Xizang.vue";
import XiBei from "../zmview/gonglue/XiBei.vue";
import YunNan from "../zmview/gonglue/YunNan.vue";
export default {
  data() {
    return {
      com: "ZuiJingGongLue",
      /* 注册组件 */
      arr: [
        { img: img1, url: "/#?九寨沟" },
        { img: img2, url: "九寨沟" },
        { img: img3, url: "九寨沟" },
        { img: img4, url: "九寨沟" },
        { img: img5, url: "九寨沟" },
      ],
      /* 活动 */
      arr1: [],
      /* 攻略 */
      arr2: [],
      /* 游记 */
      arr3: [],
      /* 酒店 */
      arr4: [],
      arr5: [],
      /* 门票 */
      arr6: [],
      arr7: [],
      /* 用户电话 */
      phone: "",
    };
  },
  name: "Home",
  components: {
    ZuiJingGongLue,
    Zhoubian,
    SiChuan,
    ChengDu,
    Xizang,
    XiBei,
    YunNan,
  },
  methods: {
    /* 活动 */
    fn(e) {
      var arr = e.currentTarget.children;
      for (let i = 0; i < arr.length; i++) {
        arr[i].style =
          "border-bottom: 3px solid transparent;color: rgb(24, 23, 23)";
      }
      e.target.style =
        "border-bottom: 3px solid #2577e3 !important;color:#2577e3";
      let index = e.target.dataset.index1;
      this.arr2 = eval(`this.arr1.slice(${index})`);
    },
    /* 攻略 */
    fm(e) {
      var arr = e.currentTarget.children;
      for (let i = 0; i < arr.length; i++) {
        arr[i].style =
          "border-bottom: 3px solid transparent;color: rgb(24, 23, 23)";
      }
      e.target.style =
        "border-bottom: 3px solid #2577e3 !important;color:#2577e3";
      this.com = e.target.classList[1];
    },
    /* 酒店 */
    hotel(e) {
      var arr = e.currentTarget.children;
      for (let i = 0; i < arr.length; i++) {
        arr[i].style =
          "border-bottom: 3px solid transparent;color: rgb(24, 23, 23)";
      }
      e.target.style =
        "border-bottom: 3px solid #2577e3 !important;color:#2577e3";
      let index = e.target.dataset.index2;
      this.arr5 = eval(`this.arr4.slice(${index})`);
    },
    /* 门票 */
    piao(e) {
      var arr = e.currentTarget.children;
      for (let i = 0; i < arr.length; i++) {
        arr[i].style =
          "border-bottom: 3px solid transparent;color: rgb(24, 23, 23)";
      }
      e.target.style =
        "border-bottom: 3px solid #2577e3 !important;color:#2577e3";
      let index = e.target.dataset.index3;
      this.arr7 = eval(`this.arr6.slice(${index})`);
    },
    /* 电话 */
    telx(e) {
      e.currentTarget.parentElement.style = "display: none";
    },
    phoneNav(e) {
      // console.log(e.currentTarget.parentElement.children);
      e.currentTarget.parentElement.children[1].style = "display: block";
    },
    tel() {},
  },
  mounted() {
    // 请求活动页所有商品
    this.$axios("/goods1").then((res) => {
      this.arr1 = res.data;
      this.arr2 = res.data.slice(0, 6);
    });
    //请求游记模块数据
    this.$axios("/goods2").then((res) => {
      this.arr3 = res.data;
    });
    //酒店代订
    this.$axios("/hotel").then((res) => {
      this.arr4 = res.data;
      this.arr5 = res.data.slice(0, 6);
    });
    //景点门票
    this.$axios("/piao").then((res) => {
      this.arr6 = res.data;
      this.arr7 = res.data.slice(0, 6);
    });
  },
};
</script>
<style  scoped>
/* 固定导航栏 */
.fix_nav {
  width: 40px;
  height: 100vh;
  /* height: 100%; */
  background-color: #333333;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 111111111111;
  text-align: center;
}
.phone_nav {
  position: relative;
  background-color: #efb42b;
  padding: 10px 0;
}

.phone_img {
  width: 25px;
  height: 25px;
}

.phone_text {
  width: 20px;
  font-size: 18px;
  color: #fff;
  margin: 0 auto;
}

.phone_hover {
  position: absolute;
  width: 140px;
  top: 0;
  left: -142px;
  background-color: #efb42b;
}

.cha {
  text-align: end;
  font-size: 16px;
  padding: 10px;
  color: #fff;
}

.cha:hover {
  cursor: pointer;
}
.phone_input,
.phone_button {
  width: 120px;
  height: 25px;
  margin: 0 10px;
  border: 0;
  outline: 0;
}

.phone_button {
  height: 30px;
  margin: 5px 10px;
  background-color: #f88803;
  color: #fff;
}

.text_phone_hover {
  font-size: 12px;
  color: #fff;
  padding: 15px;
}
.zhanwei {
  height: 80px;
}
/* 通讯方式 */
.tonxun_nav,
.dingwei {
  width: 100%;
  position: relative;
  color: #fff;
}
.sanjiao {
  widows: 0;
  height: 0;
  position: absolute;
  border: 6px solid transparent;
  border-left-color: #636363;
  top: 50%;
  margin-top: -6px;
  display: none;
}
.tongxun {
  width: 25px;
  height: 25px;
  color: #fff;
  padding: 8px 5px;
  border-top: 1px solid #ccc;
}

.home {
  /*  width: 100%; */
  min-width: 1200px;
  margin: 0 auto;
  background-color: rgb(234, 253, 253);
}

.dingwei:hover {
  background: #fc6000;
}

.dingwei1:hover .dingwei_son1,
.dingwei1:hover .sanjiao1,
.dingwei2:hover .dingwei_son2,
.dingwei2:hover .sanjiao2,
.dingwei3:hover .dingwei_son3,
.dingwei3:hover .sanjiao3,
.dingwei4:hover .dingwei_son4,
.dingwei4:hover .sanjiao4 {
  display: block;
}

.block,
.img_big {
  width: 1900px;
  height: 420px;
  margin: 0 auto;
}

.dingwei_son {
  position: absolute;
  padding: 10px;
  background-color: #636363;
  display: none;
}
.dingwei_son1 {
  top: 6%;
  left: -403%;
}
.dingwei_son2 {
  top: 6%;
  left: -509%;
}
.dingwei_son3 img {
  width: 80px;
  height: 80px;
  padding: 10px;
  background-color: #fff;
}
.dingwei_son3 {
  top: -63%;
  left: -301%;
}
.dingwei_son4 {
  top: 4%;
  left: -331%;
}
/*切换导航 */
.tow {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.tow_nav {
  line-height: 60px;
  display: flex;
  padding-top: 10px;
  margin-right: 140px;
}
.li_img1 {
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
.look_more {
  line-height: 60px;
  font-size: 12px;
  color: #181717;
  position: absolute;
  top: 0;
  right: 5px;
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
  margin-left: 6px;
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
.palce:hover {
  cursor: pointer;
}
/* 商品 */
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
.text_jianjie:hover {
  color: #ff8800;
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
/* 第一个分隔 */
.fenge1 {
  width: 1200px;
  margin: 0 auto;
}
/* 游记 */
.youji_box {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 20px auto;
}
.youji_nav {
  position: relative;
  text-decoration: none;
  color: #333;
  width: 280px;
  margin: 10px;
}
.youji_img1 {
  width: 100%;
  height: 185px;
}
.youji_title {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  color: #333;
}
.youji_title:hover {
  color: #ff8800;
}
.youji_descrption {
  width: 100%;
  height: 33px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden !important;
  font-size: 12px;
  color: rgb(151, 151, 151);
  margin-bottom: 10px;
}
.touxaing {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 155px;
  left: 25px;
}

.youji_nav,
.one_goods_info {
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.youji_nav:hover,
.one_goods_info:hover {
  top: -2px;
  transition: box-shadow 0.4s, transform 0.4s;
}
</style>
