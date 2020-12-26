<template>
  <div>
    <Search></Search>
    <div class="imgbox">
      <img src="../../assets/ws/placebg.jpg" alt="图片加载失败" />
    </div>
    <!-- 这里要做网络请求，得到一些图片，并且对这些图片要有一个排版  以及点击进去之后可以跳转对应页面 -->
    <h1 class="hottext">热门目的地</h1>
    <div class="hotplace">
      <div class="box" v-for="el in placearr" :key="el.id" @click="toPlace(el.id)">
          <img :src="el.img" alt="图片加载失败" />
          <h4 v-html="el.name"></h4>
      </div>     
    </div>

    <h1 class="alltext">全部目的地</h1>
    <div class="allplace hotplace">
       <div class="box" v-for="el in placearr" :key="el.id" @click="toPlace(el.id)">
          <img :src="el.img" alt="图片加载失败" />
          <h4 v-html="el.name"></h4>
      </div> 
    </div>
  </div>
</template>

<script>
import Search from "@/components/wscomponents/Search.vue";
export default {
  data() {
    return {
      imgurl: " ",
      placearr:[]
    };
  },
  components: {
    Search
  },
  methods: {

    toPlace(){
      console.log(111111);
      this.$router.push("/toplace")
    }
  },
  mounted(){
      var url = "/place";
      this.$axios(url).then((res) => {
        this.placearr = res.data;
      });
  }

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  width: 1920px;
  height: 380px;
}
.hottext {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    color: #FC6000 ;
    line-height: 80px; 
    border-bottom: 6px double #FC6000;
}
.hotplace {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

}
.alltext {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    color: #FC6000 ;
    line-height: 80px; 
    border-bottom: 6px double #FC6000;

}

/* 网络图片  请求来的大小 */
.hotplace {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box img {
  width: 250px;
  height: 250px;
  margin-top: 10px;
}
</style>