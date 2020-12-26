<template>
  <div class="drive">
    <div class="navtitle">
      <router-link to="/" class="return">首页</router-link>
      <span class="return-icon">></span>
      <span class="dingdan">租车自驾</span>
    </div>
    <div class="middle">
      <div class="m-left">
        <span class="title1">车型：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="btn" @click="fn">搜索</div>
      </div>

      <div class="m-right">
        <el-carousel indicator-position="outside" :interval="4000">
          <el-carousel-item v-for="item in arr2" :key="item">
            <img :src="item" class="lunbo" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 客户点评 -->
    <div class="comment">
      <h3>客户点评</h3>
      <p>了解最真实的旅游服务评价</p>
      <hr>
    </div>
    <Carcomment v-for="el in arr3" :carcomment="el" :key="el.username" class="cargoods-item"></Carcomment>

  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "越野车",
          label: "越野车",
        },
        {
          value: "商务车",
          label: "商务车",
        },
        {
          value: "房车",
          label: "房车",
        },
        {
          value: "大巴车",
          label: "大巴车",
        },
        {
          value: "保姆车",
          label: "保姆车",
        },
        {
          value: "小轿车",
          label: "小轿车",
        },
      ],
      value: "",
      arr2: [
        "http://www.ezout.cn/uploads/2020/0402/9b99ec0f1e18abd735e85db66b43e959_815x320.jpg",
        "http://www.ezout.cn/uploads/2019/0114/2dec373ad3af57e56ecef59d304f9d96_815x320.jpg",
        "http://www.ezout.cn/uploads/2019/0114/0756de7a5c0a921ac84452fb2b9f29f8_815x320.jpg",
      ],
      arr3:[
          {
            carimg:"http://www.ezout.cn/uploads/2019/0625/658bf95b75170ccd3d0436be1976a41d.jpg",
            name:"7座福特途睿欧商务车出租",
            time:"2020-12-09",
            username:"绿水无忧",
            text:"司机师傅很亲和的，服务很周到，而且车也很舒服，一切都很方便的，这次出行很开心哦",
          },
          {
            carimg:"http://www.ezout.cn/uploads/2019/0625/b5b0da9906c7cb05c98612a1482f8228.jpg",
            name:"丰田普拉多5座越野车出租",
            time:"2020-11-14",
            username:"烟雨醉巷",
            text:"这次我们是走的路线是成都-浮云牧场-毕棚沟-古尔沟-达古冰川-松坪沟-成都，总共4天的时间，这次非常幸运的是蜀尚给我们安排了张师傅！非常靠谱，车技非常好，而且也非常耐心给我们介绍我们路上的景点和特色，每一站都平安送达，同时还特地带我们去了其他特色的地方（不在计划内），真的非常棒！！我是一个基本上从来不喜欢评价的人，这次真的对整个行程，对陈师傅真的满意至极！张师傅平时是走川进青出的路线，想走我们去过的地方，或者青海拉萨以及川西其他路线，极力推荐找陈师傅！！这次旅行非常满意！",
          },
          {
            carimg:"http://www.ezout.cn/uploads/2019/0227/ebfb823848842c9aab8c0258c653b496.jpg",
            name:"7座别克GL8商务车出租",
            time:"2020-10-09",
            username:"雨铃",
            text:"非常愉快的一次旅行，我们的火车是早晨5点半到成都，人生地不熟，一开始是跟客服沟通让司机师傅早晨来火车站接我们，结果到成都之后我们又临时决定先去酒店收拾一下再出发，所以临时给司机师傅打电话说我们改了行程、改让师傅晚些时候去酒店接我们。司机黄师傅自始至终态度都很好，上午都江堰、下午青城山的安排也很科学，返回成都已经晚上7点多了，很累但是玩的很开心。",
          },
          {
            carimg:"http://www.ezout.cn/uploads/2019/0227/ebfb823848842c9aab8c0258c653b496.jpg",
            name:"7座别克GL8商务车出租",
            time:"2020-9-28",
            username:"满城风絮",
            text:"一次特别的旅行，旅途中的风景真的很美，川西这一路，雪山，草原，海子，蓝天，白云……交通比较顺畅，天气也算给力，这趟真是经历一年四季，亚丁景区的雨雪很是特别，这一路的景色很是不一样，川西自己的样子，我很喜欢，还会再来！",
          },
          {
            carimg:"http://www.ezout.cn/uploads/2019/0625/5645726882d8848e8b6149c5e9ab02f2.jpg",
            name:"5座长城哈弗H9/H6越野车出租",
            time:"2020-9-02",
            username:"静谧幽蓝",
            text:"一次很成功的川西旅行，司机师傅很热情周到，开车技术很稳，我们有人晕车和高反不能爬色达，司机师傅能照顾到每一个人，带着高反的小伙伴去看土拨鼠，很细心周到。司机很熟悉当地的路况，带我们玩遍好看的每一个地方，公路上碰见好看的风景都提醒我们去看和拍照。每到吃饭的时候都带我们去最近最便宜最好吃的饭店去吃饭，吃得顺心，玩得开心。",
          },
      ]
    };
  },
  methods: {
    async fn() {
      console.log(this.value);
      var data = {
        leixing: this.value,
      };
      var url = "/drive";
      var res = await this.$axios.post(url, data, { withCredentials: true });
      if (res.data.code == 2004) {
        this.$router.push("/carorder");
      } else if (res.data.code == 4004) {
        console.log("失败");
      }
    },
  },
  components:{
    Carcomment:() => import("@/components/yrcomponents/Carcomment.vue"),
  }
};
</script>

<style scoped>
.drive {
  width: 100%;
  /* margin: 0 auto; */
  /* height: 890px; */
  background-color: #fff;
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
.middle {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 320px;
  margin: 0 auto;
}
.m-left {
  width: 310px;
  height: 230px;
  padding: 35px 30px;
  background-color: #e5e5e5;
}
.m-right {
  width: 815px;
  height: 320px;
}
.title1 {
  display: inline-block;
  margin-top: 58px;
  padding-right: 10px;
  color: #333;
}
.btn {
  color: #fff;
  width: 200px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  border-radius: 5px;
  background: #0082dd;
  cursor: pointer;
  text-align: center;
  margin: 60px 0 0 56px;
}
.btn:hover {
  background-color: rgba(22, 127, 212, 0.8);
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
h3,p{
  width: 100%;
  text-align: center;
  margin-bottom: 18px;
}
h3{
  margin-top: 10px;
  color: #333;
  font-size: 24px;
  font-weight: 400;
}
</style>