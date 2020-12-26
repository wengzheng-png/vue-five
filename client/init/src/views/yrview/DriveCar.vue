<template>
  <div class="drive">
    <div class="navtitle">
      <router-link to="/" class="return">首页</router-link>
      <span class="return-icon">></span>
      <span class="dingdan">租车自驾</span>
    </div>
    <div class="middle">
      <div class="m-left">
        <dl class="search-dl">
          <dt>车型</dt>
          <dd>
            <input type="text" class="title1" placeholder="车型" data-id="13" />
            <div class="cs-select-box" style="display: none">
              <span data-id="13">越野车</span>
              <span data-id="14">商务车</span>
              <span data-id="16">中巴车</span>
              <span data-id="23">房车</span>
              <span data-id="17">大巴车</span>
              <span data-id="21">保姆车</span>
              <span data-id="20">豪华车</span>
              <span data-id="18">小轿车</span>
              <span data-id="19">跑车</span>
              <span data-id="22">其它</span>
            </div>
          </dd>
        </dl>
      </div>

      <div class="m-right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.drive {
  width: 100%;
  /* margin: 0 auto; */
  height: 890px;
  background-color: #fff;
}
.navtitle {
  height: 30px;
  margin-left: 100px;
  padding: 16px 0 6px 0;
}
.return {
  color: #666;
  font-size: 12px;
  text-decoration: none;
}
.return-icon,
.dingdan {
  font-size: 12px;
  color: #999;
  margin-left: 6px;
}
.middle {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 320px;
  margin: 0 auto;
}
.m-left {
  width: 310px;
  height: 250px;
  padding: 35px 30px;
  background-color: #e5e5e5;
}
.m-right {
  width: 815px;
  height: 320px;
  background-color: bisque;
}
dt {
  color: #333;
  width: 90px;
  height: 36px;
  line-height: 36px;
  padding-left: 50px;
  font-size: 14px;
}
.search-dl{
    width: 310px;
    height: 38px;
    margin-bottom: 18px;
    background: #fff;
}
dd{
    position: relative;
    top: -36px;
    left: 97px;
}
.title1{
    border: none;
    width: 200px;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    font-size: 14px;
    background-image: url(../../assets/yrimg/drive-jingling.png); 
    background-repeat: no-repeat;
    background-position: 190px -12px;
}
</style>