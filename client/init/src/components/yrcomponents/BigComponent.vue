<template>
  <div>
    <GoodsTitle :title="arr4[0]"></GoodsTitle>
    <div class="flexgoods">
      <GoodsItems v-for="el in arr1" :goods="el" :key="el.id" class="goodsitems"></GoodsItems>
    </div>

    <GoodsTitle  :title="arr4[1]"></GoodsTitle>
    <div class="flexgoods">
      <GoodsItems v-for="el in arr2" :goods="el" :key="el.id" class="goodsitems"></GoodsItems>
    </div>

    <GoodsTitle  :title="arr4[2]"></GoodsTitle>
    <div class="flexgoods">
      <GoodsItems v-for="el in arr3" :goods="el" :key="el.id" class="goodsitems"></GoodsItems>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: [],
      arr2: [],
      arr3: [],
      arr4:["畅游四川","精品小团探索川西","周边2日游线路"],
    };
  },
  mounted() {
    this.$axios("/goodsitems").then((res) => {
      console.log(res);
      if (res.data.code === 4001) {
        console.log(商品不存在);
      } else {
        this.arr1 = res.data.slice(0,8);
        this.arr2 = res.data.slice(8,16);
        this.arr3 = res.data.slice(16,24);
      }
    });
  }, 
  components: {
    GoodsItems: () => import("@/components/yrcomponents/GoodsItems.vue"),
    GoodsTitle: () => import("@/components/yrcomponents/GoodsTitle.vue"),
   
  },
};
</script>

<style scoped>
.goodsitems {
  height: 318px;
  width: 1220px;
  box-sizing: border-box;
}
.flexgoods {
  height: 620px;
  width: 1220px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  margin-top: 30px;
}

</style>