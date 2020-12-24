<template>
  <div class="top">
    <!-- 顶部第一个导航栏  -->
    <div class="center">
      <span class="left"
        >专注户外纯玩，十年用心服务。您身边的纯玩旅游服务商</span
      >
      <div class="right">
        <div class="scroll_order">
          <!-- 3个活动轮播 -->
          <el-carousel
            height="30px"
            direction="vertical"
            :autoplay="true"
            :interval="4000"
          >
            <el-carousel-item
              v-for="(item, index) in arr"
              :key="index"
              class="scroll"
            >
              <span class="span1">{{ item.text }}</span>
              <router-link to="#" class="span2">{{ item.info }}</router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 登录注册 -->
        <ul class="login">
          <li>个人中心</li>
          <li>登录</li>
          <li>免费注册</li>
          <li class="el-icon-search">订单详情</li>
          <li class="el-icon-menu daohang">
            网站导航
            <div class="nav_web">
              <router-link to="#" class="daohangxiala">活动</router-link>
              <router-link to="#" class="daohangxiala">主题游</router-link>
              <router-link to="#" class="daohangxiala">私人订制</router-link>
              <router-link to="#" class="daohangxiala">目的地</router-link>
              <router-link to="#" class="daohangxiala">攻略</router-link>
              <router-link to="#" class="daohangxiala">游记</router-link>
              <router-link to="#" class="daohangxiala">酒店代订</router-link>
              <router-link to="#" class="daohangxiala">景点门票</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 顶部搜索栏 -->
    <div class="center">
      <div class="search">
        <div class="img_nav">
          <img class="logo" src="../../assets/zmimg/logo.png" alt="" />
        </div>
        <div class="search_nav">
          <div class="huodong" @mouseenter="fn" @mouseleave="fm">
            <span class="span_huodong"> 活动 </span>
            <span
              class="span_huodong2"
              :class="{ 'el-icon-arrow-down': n1, 'el-icon-arrow-up': n2 }"
            ></span>
            <div class="huodong_nav">
              <router-link to="#" class="search_huodong">活动</router-link>
              <router-link to="#" class="search_huodong">攻略</router-link>
              <router-link to="#" class="search_huodong">游记</router-link>
              <router-link to="#" class="search_huodong">酒店代订</router-link>
              <router-link to="#" class="search_huodong">景点门票</router-link>
            </div>
          </div>
          <!-- input搜索框 -->
          <input
            class="input1"
            type="text"
            placeholder="九寨沟"
            v-model="place"
            @focus="inputFocus"
          />
          <el-button type="primary" icon="el-icon-search" @click="search"
            >搜索</el-button
          >
          <!-- input搜索框下拉菜单 -->
          <pullDownMenu></pullDownMenu>
        </div>
        <!-- 热线电话 -->
        <div class="hot_line">
          <span class="el-icon-phone-outline hot_line1"></span>
          <span>128-123-6845</span>
        </div>
      </div>
    </div>

    <!-- 顶部第二个导航栏 -->
    <div class="daohanglan">
      <div class="daohanglan_box" @click="shouye">
        <router-link to="#?"  class="daohang_items" style="backgroundColor:#0a56bb">首页<div class="daosanjia_none" style="display: block"></div></router-link>
        <router-link to="/he"  class="daohang_items">活动<div class="daosanjia_none"></div></router-link>
        <router-link to="#?"  class="daohang_items">主题游<div class="daosanjia_none"></div></router-link>
        <router-link to="#?"  class="daohang_items">私人订制<div class="daosanjia_none"></div></router-link>
        <router-link to="#?"  class="daohang_items">目的地<div class="daosanjia_none"></div></router-link>
        <router-link to="/gonglue"  class="daohang_items">攻略<div class="daosanjia_none"></div></router-link>
        <router-link to="/notes"  class="daohang_items">游记<div class="daosanjia_none"></div></router-link>
        <router-link to="/hotel"  class="daohang_items">酒店代购<div class="daosanjia_none"></div></router-link>
        <router-link to="#?"  class="daohang_items">景点门票<div class="daosanjia_none"></div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import pullDownMenu from "./top/pullDownMenu.vue";
export default {
  data() {
    return {
      n1: true,
      n2: false,
      place: "",
      arr: [
        {
          text: "模架杨燕vivi1小时前评论了",
          info:
            "【稻亚直通车】摄影家天堂 新都桥 墨石公园 塔公稻城亚丁净心4~12人5日之旅",
        },
        {
          text: "古1小时前评论了",
          info:
            "【九黄毕棚】毕棚沟 浮云牧场 九寨沟 黄龙网红打卡鹧鸪山4~6人4日之旅",
        },
        {
          text: "无眠兔26分钟前评论了",
          info:
            "【九黄甘南】九寨沟 扎尕那 毕棚沟 黄龙 九曲黄河第一湾花湖川西环线4~6人6日之旅",
        },
      ],
    };
  },
  components: {
    pullDownMenu,
  },
  methods: {
    // 鼠标滑入事件
    fn() {
      this.n1 = false;
      this.n2 = true;
    },
    // 鼠标滑出事件
    fm() {
      this.n1 = true;
      this.n2 = false;
    },
    //点击搜索框
    search() {},
    //搜索框聚焦就修改子组件的类名
    inputFocus() {
      this.$store.state.msg = "pull_down_menu";
    },
    //选中时单个按钮改变样式
    shouye(e) {
      var arr = e.currentTarget.children
      for (let i = 0; i < arr.length; i++) {
       arr[i].style.backgroundColor= " #2577e3";
       arr[i].children[0].style="display: none";
      }     
      e.target.style.backgroundColor= "#0a56bb";
      e.target.children[0].style="display: block";
    },
  },
};
</script>


<style scoped>
li {
  list-style: none;
}
.top {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #f9f7f6;
  border-bottom: 1px solid #ddd;
}
/* 顶部导航栏 */
.center {
  font-size: 12px;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  color: #ff0000;
}
.right {
  position: relative;
  width: 747px;
  height: 100%;
}
.scroll_order {
  position: relative;
  top: 0;
  left: 0;
}
.scroll {
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.span2 {
  color: #000;
}
.login {
  display: flex;
  position: relative;
  top: -30px;
  right: -330px;
  width: 400px;
  margin-right: 0;
}
.login li {
  font-weight: 600;
  line-height: 30px;
  padding: 0 10px;
}
.login li:hover {
  cursor: pointer;
  color: #ff8800;
}
.span1 {
  color: #ff8800;
}
.daohang {
  position: relative;
}
.daohang:hover {
  background-color: #fff;
}
.nav_web {
  position: absolute;
  z-index: 9999;
  right: -1px;
  top: 30px;
  width: 140px;
  padding: 0 10px;
  border: 1px solid #eee;
  border-top: 0;
  background: #fff;
  /* // display: none; */
  height: 0;
  overflow: hidden;
  /* // transition: all 1s linear 0.01s; */
}
.daohang:hover .nav_web {
  /* // display: block; */
  height: 120px;
  transition: all 0.5s linear 0.01s;
}
.nav_web .daohangxiala {
  display: inline-block;
  width: 70px;
  text-align: start;
}
.nav_web .daohangxiala:hover {
  color: #ff8800 !important;
}

/* 顶部搜索框 */
.search {
  min-width: 1200px;
  width: 100%;
  height: 85px;
  padding: 22px 0 23px;
  display: flex;
  position: relative;
}
.logo {
  max-width: 298px;
  max-height: 85px;
  display: block;
}
/* 搜索框左侧活动 */
.search_nav {
  width: 453px;
  height: 36px;
  border: 1px solid #2577e3;
  display: flex;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: auto 40px auto 180px;
  position: relative;
}
.huodong {
  width: 90px;
  height: 34px;
  line-height: 34px;
  background-color: #f8f8f8;
  text-align: start;
  padding-left: 5px;
  font-size: 12px;
  font-weight: 600;
  position: relative;
}

.huodong:hover .huodong_nav {
  display: block;
}
.span_huodong {
  margin-right: 40px;
  font-weight: 400 !important;
}
.span_huodong2 {
  font-size: 14px;
  font-weight: 700;
}
.huodong_nav {
  width: 90px;
  position: absolute;
  z-index: 200;
  top: 36px;
  left: -1px;
  display: none;
}
.search_huodong {
  display: inline-block;
  width: 87px;
  height: 34px;
  text-align: start;
  padding-left: 5px;
  border: 1px solid #ddd;
  border-top: 0;
  background-color: #ffffff;
  font-weight: 400 !important;
}
/* 搜索框 */
.input1 {
  width: 280px;
  height: 34px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  padding-left: 10px;
}
/* 搜索框下拉菜单 */

/* 右侧热线电话 */
.hot_line,
.hot_line1 {
  font-size: 20px;
  font-weight: 700;
  margin: auto 5px;
  color: #ff0000;
}

/* 顶部第二个导航栏 */
.daohanglan {
  /* // width: 100%; */
  min-width: 1200px !important;
  height: 40px;
  line-height: 40px;
  background-color: #2577e3;
  color: #fff;
  position: relative;
  top: 100px;
  left: 0;
}
.daohanglan_box {
  width: 1200px;
  display: flex;
  margin: 0 auto;
}
.daohang_items {
  font-weight: 400 !important;
  padding: 0 30px;
  background-color: #2577e3;
  color: #fff !important;
  font-size: 14px;
  position: relative;
}

.daohang_items:hover {
  background-color: #0a56bb !important;
}
.daohang_items:hover .daosanjia_none {
  display: block !important;
}

.daosanjia_none {
  width: 0;
  height: 0;
  border: transparent solid 4px;
  border-bottom-color: #fff;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: none ;
}
</style>
