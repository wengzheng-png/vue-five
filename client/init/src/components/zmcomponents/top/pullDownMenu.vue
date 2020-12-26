<template>
  <div :class="this.$store.state.msg">
    <div class="hot_search">
      <span>热门搜索</span><span @click="del" class="del">X</span>
    </div>
    <div class="hot_text">热搜词</div>
    <!-- 热搜词 -->

    <div class="hot_place" @click="fn">
      <div class="palace_small">九寨沟</div>
      <div class="palace_small">稻城亚丁</div>
      <div class="palace_small">色达</div>
      <div class="palace_small">四姑娘山</div>
      <div class="palace_small">若尔盖</div>
      <div class="palace_small">毕棚沟</div>
      <div class="palace_small">牛背山</div>
    </div>
    <!-- 目的地 -->
    <div class="hot_text">目的地</div>
    <div class="hot_place" @click="fn">
      <div class="palace_small">九寨沟</div>
      <div class="palace_small">稻城亚丁</div>
      <div class="palace_small">色达</div>
      <div class="palace_small">四姑娘山</div>
      <div class="palace_small">若尔盖</div>
      <div class="palace_small">毕棚沟</div>
      <div class="palace_small">牛背山</div>
      <div class="palace_small">冷嘎措</div>
      <div class="palace_small">318川藏线</div>
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
  methods: {
    del() {
      this.$store.state.msg = "pull_down_none";
    },
    // fn(e) {
    //   this.$store.state.search = e.target.innerHTML;
    //   /* 将每个点击事件的内容作为字段做网络请求 */
    //   // console.log(this.$store.state.search);
    //   this.$axios("/WalkthroughDetails", {
    //     params: { details: this.$store.state.search },
    //   }).then((res) => {
    //     this.arr = res.data;
    //     // console.log(this.arr[0]);
    //     /* 将请求到的数据传给攻略详情页面 */
    //     this.$router.push({
    //       path: "/walkthrough",
    //       query: { data: this.arr[0] },
    //       // name:"Walkthrough",params:{arg1:this.arr[0]}
    //     });
    //   });
    // },

    fn(e){
       this.$store.state.search = e.target.innerHTML;
       this.$router.push({
          path: "/walkthrough",
          query: { keyword: this.$store.state.search },
        });
    }
  },
};
</script>

<style scoped >
.pull_down_menu {
  position: absolute;
  left: -1px;
  top: 40px;
  z-index: 99999;
  width: 413px;
  padding: 10px 19px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  background: #fff;
}
.pull_down_none {
  display: none;
}
.hot_search {
  color: #ccc;
  height: 30px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.del {
  width: 10px;
}
.del:hover {
  cursor: pointer;
}
.hot_text {
  text-align: start;
  font-size: 12px;
  font-weight: 700;
}
.hot_place {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.palace_small {
  font-weight: 400 !important;
  padding-right: 20px;
}
</style>
