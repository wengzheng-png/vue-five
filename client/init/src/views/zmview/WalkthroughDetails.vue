<template>
  <div class="box1">
    <router-link to="gonglue" class="gonglue">攻略<<<</router-link>
    <div v-for="el in arr" :key="el.id" class="box2">
      <!-- 头像框 -->
      <div class="box3">
        <div class="box4">
          <img :src="el.infoimg" alt="" class="touxiang" />
          <div v-html="el.title" class="box5"></div>
        </div>
      </div>
      <!-- 详情页 -->
      <div class="box6">
        <div class="box7">
          <div class="gps1">概述</div>
          <div v-html="el.gaishu" class="box8"></div>
        </div>
        <!-- 详情 -->
        <div class="box10">
          <i v-html="el.title2" class="box9"></i>
          <div v-html="el.details" class="box8"></div>
          <div class="gps1">12:00</div>
        </div>
        <!-- 图片 -->

        <div class="box11">
          <img :src="el.infoimg" alt="" class="img1" />
          <div class="gps1"><i>one day</i></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    // this.$nextTick(function () {
      /* 情况一：直接发字段请求数据库 */
      let queryObj = this.$route.query.keyword;
      // console.log(queryObj);
      // if (queryObj) {
        this.$axios("/WalkthroughDetails", {
          params: { details: queryObj },
        }).then((res) => {
          this.arr = res.data;
          console.log(this.arr);
        });
      // } else if (this.$route.query.data) {
        // this.arr.push(this.$route.query.data);
        // console.log(this.arr);
      // }
    // });
  },
};
</script>

<style scoped lang="scss">
.box1 {
  width: 100%;
  background-color: #fafafa;
  margin: 0 auto;
}
.gonglue {
  display: block;
  width: 1200px;
  margin: 0 auto;
  color: #ccc;
}
.box3 {
  background-image: url("../../assets/zmimg/touxiang.jpg");
  width: 100%;
  height: 140px;
}
.box4 {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.box5 {
  position: absolute;
  top: 95px;
  left: 101px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.touxiang {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  position: absolute;
  top: 100px;
  left: 0;
}
.box6 {
  width: 1100px;
  margin: 0 auto;
  border-left: 2px solid #ccc;
  margin-top: 70px;
  padding-left: 50px;
}
.box7,
.box10,
.box11 {
  position: relative;
  padding-bottom: 40px;
  width: 100%;
}
.gps1 {
  color: #999999;
  position: absolute;
  top: 12px;
  font-size: 10px;
  left: -75px;
  padding: 3px 10px;
  background-color: #eaeaea;
}
.box8 {
  letter-spacing: 2pt;
  color: #404040;
  line-height: 30px;
}

.box9 {
  padding: 8px 16px;
  background-color: #2577e3;
  font-size: 18px;
  margin-bottom: 25px;
  display: inline-block;
}
.img1 {
  padding: 20px;
  margin: 0 auto;
}
</style>