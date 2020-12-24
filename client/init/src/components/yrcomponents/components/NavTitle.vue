<template>
  <h3 class="theme1-p">
    <div class="theme1-title-img1"></div>
    <strong class="theme1-title">{{navtitle}}</strong>
    <div class="theme1-title-img2"></div>
  </h3>
</template>

<script>
export default {
  props:["navtitle"]
};
</script>

<style scoped>

.theme1-title {
  color: #ffd739;
  display: inline-block;
  max-width: 1000px;
  padding: 0 20px;
  font-size: 32px;
  font-weight: bold;
}
.theme1-title-img1,
.theme1-title-img2 {
  background-position: 0 -129px;
  content: "";
  display: inline-block;
  width: 80px;
  height: 47px;
  vertical-align: middle;
  background-image: url("../assets/theme-jingling.png");
}
.theme1-title-img2 {
  background-position: -83px -129px;
}
.theme1-p {
  text-align: center;
}
</style>