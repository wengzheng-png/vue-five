<template>
  <div :class="this.$store.state.msg">
    <div class="hot_search">
      <span>热门搜索</span><span @click="del" class="del">X</span>
    </div>
    <div class="hot_text">热搜词</div>
    <!-- 热搜词 -->
    <div class="hot_place">
      <router-link class="palace_small" to="#?九寨沟">九寨沟</router-link>
      <router-link class="palace_small" to="#?稻城亚丁">稻城亚丁</router-link>
      <router-link class="palace_small" to="#?色达">色达</router-link>
      <router-link class="palace_small" to="#?四姑娘山">四姑娘山</router-link>
      <router-link class="palace_small" to="#?若尔盖">若尔盖</router-link>
      <router-link class="palace_small" to="#?毕棚沟">毕棚沟</router-link>
      <router-link class="palace_small" to="#?牛背山">牛背山</router-link>
    </div>
    <!-- 目的地 -->
     <div class="hot_text">目的地</div>
    <div class="hot_place">
      <router-link class="palace_small" to="#?九寨沟">九寨沟</router-link>
      <router-link class="palace_small" to="#?稻城亚丁">稻城亚丁</router-link>
      <router-link class="palace_small" to="#?色达">色达</router-link>
      <router-link class="palace_small" to="#?四姑娘山">四姑娘山</router-link>
      <router-link class="palace_small" to="#?若尔盖">若尔盖</router-link>
      <router-link class="palace_small" to="#?毕棚沟">毕棚沟</router-link>
      <router-link class="palace_small" to="#?牛背山">牛背山</router-link>
      <router-link class="palace_small" to="#?冷嘎措">冷嘎措</router-link>
      <router-link class="palace_small" to="#?318川藏线">318川藏线</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    del() {
      this.$store.state.msg = "pull_down_none";
    },
  },
};
</script>

<style scoped lang="scss">
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
.hot_text{
  text-align: start;
  font-size: 12px;
  font-weight: 700;
}
.hot_place{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.palace_small{
  font-weight: 400 !important;
  padding-right: 20px;
}
</style>
