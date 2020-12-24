<template>
  <div class="themeTour">
    <router-link to="/" class="mainpage"><div class="return">
        首页<span class="return-icon">></span>
      </div></router-link>
    <div class="tour-dev">
      <span class="title1">热门主题游</span>
      <span class="title2">共计<em>11</em>个专题</span>
    </div>
    <div class="tour-item">
      <router-link to="/themeitem1" class="item-a">
        <div class="item">
          <img src="@/assets/theme1.jpg" alt="" />
          <div class="item-text">元旦节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-12-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem2" class="item-a">
        <div class="item">
          <img src="@/assets/theme2.jpg" alt="" />
          <div class="item-text">春节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-01-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem3" class="item-a">
        <div class="item">
          <img src="@/assets/theme3.jpg" alt="" />
          <div class="item-text">清明节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-05-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem4" class="item-a">
        <div class="item">
          <img src="@/assets/theme4.jpg" alt="" />
          <div class="item-text">五一节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-04-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem5" class="item-a">
        <div class="item">
          <img src="@/assets/theme5.jpg" alt="" />
          <div class="item-text">端午节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-03-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem6" class="item-a">
        <div class="item">
          <img src="@/assets/theme6.jpg" alt="" />
          <div class="item-text">中秋节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-06-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem7" class="item-a">
        <div class="item">
          <img src="@/assets/theme7.jpg" alt="" />
          <div class="item-text">国庆节旅行活动一览表</div>
          <div class="item-time">发布时间：2020-08-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem8" class="item-a">
        <div class="item">
          <img src="@/assets/theme8.jpg" alt="" />
          <div class="item-text">春暖花开活动一览表</div>
          <div class="item-time">发布时间：2020-01-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem9" class="item-a">
        <div class="item">
          <img src="@/assets/theme9.jpg" alt="" />
          <div class="item-text">暑假嗨游旅行活动一览表</div>
          <div class="item-time">发布时间：2020-06-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem10" class="item-a">
        <div class="item">
          <img src="@/assets/theme10.jpg" alt="" />
          <div class="item-text">金秋彩林旅行活动一览表</div>
          <div class="item-time">发布时间：2020-09-01</div>
        </div>
      </router-link>
      <router-link to="/themeitem11" class="item-a">
        <div class="item">
          <img src="@/assets/theme11.jpg" alt="" />
          <div class="item-text">冬游川西旅行活动一览表</div>
          <div class="item-time">发布时间：2020-10-01</div>
        </div>
      </router-link>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style scoped>
.mainpage {
  text-decoration: none;
}
.themeTour {
  min-width: 1000px;
  height: 890px;
  background-color: rgb(246, 246, 246);
}
.tour-dev {
  width: 1200px;
  height: 50px;
  color: #333;
  background-color: #fff;
  margin: 0 auto;
  line-height: 50px;
}
em {
  color: #07cd5a;
  font-weight: bold;
}
.title1 {
  font-size: 12px;
  margin-left: 20px;
  color: red;
}
.title2 {
  font-size: 14px;
  margin-left: 20px;
}
.return {
  width: 800px;
  height: 70px;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  position: relative;
  top: 38px;
  left: 72px;
}
.return-icon {
  margin-left: 6px;
}
.tour-item {
  height: 738px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.item-a {
  display: block;
  width: 290px;
  height: 240px;
  background-color: #fff;
  margin-top: 10px;
  text-decoration: none;
  margin-right: 10px;
}
img {
  width: 271px;
  height: 134px;
  margin-left: 9px;
  margin-top: 9px;
}
.item-time {
  padding-top: 7px;
  color: #999;
  line-height: 20px;
  font-size: 12px;
  margin-left: 9px;
  margin-top: 30px;
}
.item-text {
  margin-left: 9px;
  color: #333;
  margin-top: 5px;
}
</style>