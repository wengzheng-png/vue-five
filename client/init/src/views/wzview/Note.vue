<template>
  <div class="box">
    <!-- 头部 -->
    <div class="header">
      <img
        src="http://www.ezout.cn/plugins/notes/public/images/user_youji_bg.png"
        alt=""
      />
      <router-link tag="div" to="#"
        ><div class="white">发表游记</div>
      </router-link>
    </div>

    <!-- 中间部分 -->
    <div class="main">
      <div class="left">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4034745160,2291219696&fm=26&gp=0.jpg" alt="">
          <div class="poem">
              <h3>枫桥游记</h3>
              <span>一一一丁瑜章</span>
              <p>在苏州古城</p>
              <p>在下午三点</p>
              <p>我听到了寒山寺的钟声</p>
              <p>也看见了穿过枫桥桥洞的游船</p>
              <p>随着时代的变迁</p>
              <p>姑苏古城不断扩展</p>
              <p>寒山寺地处姑苏城中心地段</p>
              <p>再也听不到乌鸦的啼叫</p>
              <p>传入耳朵的，是游客的侃侃交谈</p>
              <p>如今的枫桥</p>
              <p>是旅游休闲的胜地</p>
              <em>张继老先生的《枫桥夜泊》</em>
              <em>成了游客悟道的禅</em>
              <em>2018年4月15日于苏州</em>
          </div>
          <img class="img2" src="https://ss2.meipian.me/users/7058108/0b1c479e076c46768a2c6974538cbd34.jpg?meipian-watermark/bucket/ivwen/key/dXNlcnMvNzA1ODEwOC8wYjFjNDc5ZTA3NmM0Njc2OGEyYzY5NzQ1MzhjYmQzNC5qcGc=/nickname/6buU5bed5pGE5b2x6YWN6K-X6IuR/userid/NzA1ODEwOA==/sign/94b947234eca2a678148872cdc466cfa%7cimageView2/2/w/750/h/1400/interlace/0/q/80" alt="">
      </div>
      <div class="right">
        <ul>
          <li class="head">
            <span class="title">本季热门</span>
            <span class="text">看旅游达人分享经历</span>
          </li>
          <li>
            <span class="title">达人攻略</span>
            <span class="text">看旅游达人分享经历</span>
          </li>
        </ul>
        <div class="axcon">
          <div class="smallpart" v-for="el in arr" :key="el.pid">

             <router-link :to="'/show?aid='+el.pid" tag="div" class="adiv">
             <img :src="el.img1" alt="" />
             <div class="insmall">
              <h3>{{ el.title }}</h3>
              <p>{{ el.descrption }}</p>
              <span>发布时间:{{ el.date }}</span>
            </div>
            </router-link>

          </div>
        </div>
        <div class="fengye" @click="fn" >
            <span class="anniu" >1</span>
            <span class="anniu" >2</span>
            <span class="anniu" >3</span>
        </div>
      </div>
    </div>

    <router-view></router-view>
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
      fn(e){
        // var datee = e.target.innerHTML
        console.log(66666);
        this.$axios.get("/note?",{params:{"uid":e.target.innerHTML}}).then((res)=>{this.arr = res.data;})
       
      }
  },
  mounted() {
    this.$axios.get("/note").then((res) => {
      this.arr = res.data;
    //   console.log(res.data);
    });
  },
};
</script>

<style scoped lang="scss">
.box .header {
  position: relative;
  .white {
    width: 140px;
    height: 40px;
    background-color: #fd801b;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-align: center;
    line-height: 40px;
  }
  .white:hover {
    background-color: #fd811bab;
  }
  img {
    width: 100%;
  }
}

.box .main {
  width: 1200px;
  height: 1080px;
  margin: 15px auto;
  // background-color: yellowgreen;
  display: flex;
  justify-content: space-between;
  .left {
    width: 26%;
    height: 100%;
    // background-color: violet;
    border-right: 2px solid #999;
    img {
        width: 100%;
        height: 164px;
   }
   p{
       margin: 20px 0px;
   }
   .img2{
        width: 100%;
        height: 250px;
        margin-top: 20px;
   }
}
  .right {
    width: 70%;
    height: 100%;
    // background-color: red;
    li {
      list-style: none;
      width: 96%;
      height: 50px;
      // background-color: blue;
      margin: 5px 2%;
      line-height: 50px;
      border-bottom: 1px solid #e5e9eb;
      .title {
        font-size: 20px;
        color: #ff7200;
        font-weight: 500;
      }
      .text {
        font-size: 12px;
        color: #999;
        font-weight: 500;
        vertical-align: 2px;
        padding-left: 15px;
      }
    }
    .head {
      margin-bottom: 50px;
    }
  }
}
.right .axcon {
  width: 96%;
  height: 864px;
  margin: 0px auto;
  // background-color: rosybrown;
  overflow: hidden;
  .smallpart {
    width: 100%;
    height: 232px;
    //    background-color: salmon;
    margin: 46px 0px;
    // display: flex;
    // justify-content: space-between;
    .adiv{
        display: flex;
    justify-content: space-between;
   
    .insmall {
      width: 56%;
      height: 100%;
      //    background-color: seagreen;
      h3 {
        color: #fa0;
        font-weight: 400;
        font-size: 18px;
        width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      p {
        margin: 10px 0px;
      }
      span {
        display: inline-block;
        margin-top: 50px;
        color: #999;
      }
    }
  }
  }
}
.right .fengye {
 
    // background-color: springgreen;
    width: 200px;
    height: 30px;
    margin: 0px 10px;
    .anniu{
        display: inline-block;
        width: 40px;
        height: 30px;
        background-color: gray;
        margin: 0px 9px;
        text-align: center;
        line-height:  30px;
        color: white;
    }
    .anniu:hover{
        background-color: lightskyblue;
    }
}
</style>