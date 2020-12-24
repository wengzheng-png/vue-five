<template>
  <div id="app">
    <div id="nav">
      <!-- 顶部公共组件 -->
      <Top></Top>
    </div>

    <!-- 中部路由 -->
    <!-- <div class="middle"> -->
    <router-view />
    <!-- </div> -->

    <!-- 底部公共组件 -->
    <Bottom></Bottom>
  </div>
</template>
<script>
import Top from "@/components/zmcomponents/Top.vue";
import Bottom from "@/components/zmcomponents/Bottom.vue";
export default {
  components: {
    Top,
    Bottom,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.center{
  width: 1200px;
  min-width: 1200px;
}
a,
.router-link-active {
  text-decoration: none;
}
li {
  list-style: none;
}
#nav {
  width: 100%;
  min-width: 1200px;
  height: 200px;
  a {
    font-weight: 400;
    color: rgba(41, 40, 40, 0.979);

    &.router-link-exact-active {
      color: #42b983;
    }
    .router-link-active {
      text-decoration: none;
      color: rgba(41, 40, 40, 0.979);
    }
  }
}
</style>
