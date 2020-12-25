<template>
   <div class="theme2">
      <h3 class="theme2-p">
        <div class="theme2-title-img1"></div>
        <span class="theme2-title">{{title}}</span>
        <div class="theme2-title-img2"></div>
      </h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
         props: ["title"],
    }
    
</script>

<style scoped>
.theme2-p {
  text-align: center;
}
.theme2 {
  margin-top: 30px;
}
.theme2-title-img1,
.theme2-title-img2 {
  background-position: 0 -81px;
  content: "";
  display: inline-block;
  width: 187px;
  height: 48px;
  vertical-align: top;
  background-image: url("../../assets/yrimg/theme-jingling.png");
}
.theme2-title-img2 {
  background-position: 0 -23px;
}
.theme2-title {
  color: #b4920c;
  display: inline-block;
  max-width: 820px;
  height: 42px;
  line-height: 42px;
  padding: 0 3px;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  font-weight: bold;
  background: #ffd739;
}
</style>