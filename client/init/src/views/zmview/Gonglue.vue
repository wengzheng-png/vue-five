<template>
  <div class="gonglue">
    <!-- 顶部轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px" class="lunbo_box">
      <el-carousel-item v-for="item in arr" :key="item.id">
        <img :src="item.img" alt="" class="img_big" />
      </el-carousel-item>
    </el-carousel>
    <div class="center">
      <!-- ======================================================================================== -->
      <router-link to="/" class="goshouye">首页<<<</router-link>
      <div class="tehui">达人玩法</div>
      <!-- ======================================================================================== -->
      <div class="wanfa_flex">
        <div class="wanfa_box">
          <div class="box1">
            <img src="../../assets/zmimg/gonglue_qinzi.jpg" alt="" />
            <div class="info">
              <div class="label">
                <div>
                  <i class="i1">1</i>
                </div>
                <div>
                  <i>days</i>
                </div>
              </div>
              <div>
                <div class="description">
                  奶爸萌娃“大闹”明孝陵，亲子游应该这么玩
                </div>
                <div class="description1">
                  梅花园外接桃花，十里香尘漫紫霞。已道名山僧占尽，林深更有帝王家。
                  作为中国规模最大的帝王陵寝之一，明孝陵也是南京旅游的重要名片，它代表了明初建筑和石刻艺术的最高成就，并被授予“明清皇家第一陵”的美誉。
                  有着如此浓厚历史积淀的景点，要以何种方式游玩儿才能让5岁的小朋友不至于觉得无聊，这个问题可是难倒我了。
                  不指望她记住多少历史知识，读万卷书不如行万里路，现在就是积跬步的好时机。
                </div>
              </div>
            </div>
            <!-- 跳转到攻略详情页 -->
            <router-link to="walkthrough?keyword=九寨沟" class="mengceng">
              <div class="mengceng1">
                奶爸萌娃“大闹”明孝陵，亲子游应该这么玩
              </div>
              <div class="look_wanfa"><span>查看玩法套餐</span></div>
            </router-link>
          </div>
        </div>
        <!-- 右侧两个小盒子 -->
        <div class="wanfa_box1">
          <div class="box3">
            <img src="../../assets/zmimg/gonglue_xue.jpg" alt="" />
            <div class="info3">
              <div class="label3">
                <div>
                  <i class="i3">1</i>
                </div>
                <div>
                  <i>days</i>
                </div>
              </div>
              <div>
                <div class="description3">
                  密云冰雪严寒依旧在，鲜花盛开为那般？
                </div>
              </div>
            </div>
            <!-- 跳转到游记 -->
            <router-link to="walkthrough?keyword=稻城亚丁" class="mengceng3">
              <div class="mengceng4">密云冰雪严寒依旧在，鲜花盛开为那般？</div>
              <div class="look_wanfa3"><span>查看玩法套餐</span></div>
            </router-link>
          </div>
        </div>
        <div class="wanfa_box1">
          <div class="box3">
            <img src="../../assets/zmimg/gonglue_xue2.jpg" alt="" />
            <div class="info3">
              <div class="label3">
                <div>
                  <i class="i3">10</i>
                </div>
                <div>
                  <i>days</i>
                </div>
              </div>
              <div>
                <div class="description3">冬日之旅，解锁不一样的星月大陆</div>
              </div>
            </div>
            <!-- 跳转到游记 -->
            <router-link to="walkthrough?keyword=若尔盖" class="mengceng3">
              <div class="mengceng4">冬日之旅，解锁不一样的星月大陆</div>
              <div class="look_wanfa3"><span>查看玩法套餐</span></div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- ======================================================================================== -->
      <div class="tehui">超值特惠</div>
      <!-- ======================================================================================== -->
      <div class="chuyou_nav">
        <router-link v-for="el in arr1" :key="el" :to="el.url" class="chuyou">
          <div v-html="el.title" class="title1"></div>
          <img :src="el.pic" alt="" />
          <div v-html="el.info" class="title2"></div>
        </router-link>
      </div>
      <!-- ======================================================================================== -->
      <div class="tehui">游记和榜单</div>
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
        { img: img1,id:1,url: "/#?九寨沟" },
        { img: img2,id:2,url: "九寨沟" },
        { img: img3,id:3,url: "九寨沟" },
      ],
      /* 第一个商品盒子 */
      arr1: [
        {
          title: "自驾",
          pic: img4,
          url: "gonginfo?url=九寨沟",
          info:
            "什么是九寨沟九环线？九环线以成都为始发点，分东西两线前往九寨沟，是乘汽车从成都到…据交通运输部微信公众号消息，经国务院同意，从5月6日零时起，全国收费公路将恢复收…",
        },
        {
          title: "自驾",
          pic: img5,
          url: "gonginfo?url=稻城亚丁",
          info:
            "什么是九寨沟九环线？九环线以成都为始发点，分东西两线前往九寨沟，是乘汽车从成都到…据交通运输部微信公众号消息，经国务院同意，从5月6日零时起，全国收费公路将恢复收…",
        },
        {
          title: "自驾",
          pic: img6,
          url: "gonginfo?url=毕棚沟",
          info:
            "什么是九寨沟九环线？九环线以成都为始发点，分东西两线前往九寨沟，是乘汽车从成都到…据交通运输部微信公众号消息，经国务院同意，从5月6日零时起，全国收费公路将恢复收…",
        },
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
  background-color: #f7f7f7;
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
  margin-bottom: 20px;
}
.goshouye {
  color: #475669;
  height: 50px;
  line-height: 50px;
}

.chuyou_nav {

  
  width: 1200px;
  color: #686868;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.chuyou {
  color: #686868;
  width: 320px;
  display: inline-block;
}
.title1 {
  width: 100%;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.title2 {
  font-size: 14px;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 0 5px 30px 5px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top-color: #fff;
}
/* 玩法 */
.wanfa_flex {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.wanfa_box {
  display: inline-block;
}
.box1 {
  width: 593px;
  height: 318px;
  margin-right: 9px;
  overflow: hidden;
  position: relative;
  color: #fff;
}
.info {
  position: absolute;
  left: 0;
  bottom: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 10px;
}
.wanfa_box:hover .info {
  bottom: 20px;
  opacity: 0;
}
.wanfa_box:hover .mengceng {
  top: 0;
}

.label {
  width: 55px;
  box-sizing: border-box;
  font-size: 18px;
  font-family: "Hiragino Sans GB", Tahoma, arial, 斜体, sans-serif;
}
.i1 {
  font-size: 40px;
  width: 100%;
}
.description,
.description1 {
  width: 526px;
  font-size: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.description {
  font-size: 30px;
}
.description1 {
  font-size: 16px;
}
.mengceng {
  width: 593px;
  height: 318px;
  color: #fff;
  position: absolute;
  top: -318px;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.336);
}
.mengceng1 {
  width: 526px;
  border-bottom: 2px solid #fff;
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 40px auto;
}
.look_wanfa {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 40px;
  border: 1px solid #fff;
  font-weight: 500;
  font-size: 24px;
  margin: 140px auto 0;
}

.box3 {
  width: 289px;
  height: 318px;
  margin-right: 0 9px;
  overflow: hidden;
  position: relative;
  color: #fff;
}
.box3 img {
  height: 318px;
}
.info3 {
  position: absolute;
  left: 0;
  bottom: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 10px;
}
.wanfa_box1:hover .info3 {
  bottom: 20px;
  opacity: 0;
}
.wanfa_box1:hover .mengceng3 {
  top: 0;
}

.label3 {
  width: 55px;
  box-sizing: border-box;
  font-size: 18px;
  font-family: "Hiragino Sans GB", Tahoma, arial, 斜体, sans-serif;
}
.i3 {
  font-size: 40px;
  width: 100%;
}
.description3 {
  width: 220px;
  font-size: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mengceng3 {
  width: 289px;
  height: 318px;
  color: #fff;
  position: absolute;
  top: -318px;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.336);
}
.mengceng4 {
  width: 249px;
  border-bottom: 2px solid #fff;
  font-size: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 40px auto;
}
.look_wanfa3 {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 40px;
  border: 1px solid #fff;
  font-weight: 500;
  font-size: 24px;
  margin: 140px auto 0;
}
</style>
