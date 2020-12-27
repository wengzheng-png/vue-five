<template>
  <div class="body">
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

    <h1 class="alltext">周边目的地</h1>
    <div class="allplace">
      <div class="right">
                <ul class="myul">
                    <li>九寨沟</li>
                    <li>稻城亚丁</li>
                    <li>318川藏线</li>
                    <li>色达</li>
                    <li>四姑娘山</li>
                    <li>海螺沟</li>
                    <li>冷嘎措</li>
                    <li>乐山大佛</li>
                    <li>党岭葫芦海</li>
                    <li>措卡湖</li>
                    <li>措卡湖</li>
                    <li>德格印经院</li>
                    <li>阆中古城</li>
                    <li>峨眉山</li>
                    <li>黄龙</li>
                    <li>泸沽湖</li>
                    <li>甲居藏寨</li>
                    <li>新都桥</li>
                    <li>莫斯卞</li>
                </ul>
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
      // placeid:"12",
      placearr:[]
    };
  },
  components: {
    Search
  },
  methods: {

    toPlace(placeid){
      this.$router.push("/toplace?placeid="+placeid)
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
.body {
  background-color: rgb(193, 220, 241);
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
.box {
  width: 330px;
  height: 330px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-top: 20px;
  border: 8px solid rgb(20, 19, 19)
}
.box img {
  width: 330px;
  height: 330px;
  border-radius: 50%;
  cursor:pointer;
}

.box img:hover {
  transform: scale(1.1);
  transition: all 2s;

}
.box h4 {
  text-align: center;
  /* margin: 10px; */
  font-size: 25px;
  color: #fff;
  position: absolute;
  top: 155px;
  left: 120px;
}


/* 全部地 */
.allplace {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

}
.right {
    width: 1000px;
    height: 200px;
    /* background-color: #c1d2e9; */
}
.myul {
    margin-top: 20px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
}
.myul li {
    width: 100px;
    height: 20px;
    margin: 5px;
    list-style: none;
}

.myul li:hover {
    color: blue;
}
</style>