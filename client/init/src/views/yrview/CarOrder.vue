<template>
  <div class="carbox">
      <div class="navtitle">
      <router-link to="/" class="return">首页</router-link>
      <span class="return-icon">></span>
      <span class="dingdan"><router-link to="/drivecar" class="return">租车自驾</router-link></span>
      <span class="return-icon">></span>
      <span class="dingdan">{{arr1[0].leixing}}详情</span>
    </div>
    <Cardetail v-for="el in arr1" :cargoods="el" :key="el.id" class="cargoods-item"></Cardetail>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr1:[{}]
    };
  },
  mounted() {
    this.$axios.post("/drivedetal").then((res) => {
      console.log(res.data[0].leixing);
      this.arr1 = res.data
    });
  },
  components: {
    Cardetail: () => import("@/components/yrcomponents/Cardetail.vue"),
  },
};
</script>

<style scoped>
.carbox {
  max-width: 1400px;
  margin: 0 auto;
  height: 800px;
  background-color: rgb(248, 249, 250);;
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
</style>