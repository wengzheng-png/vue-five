<template>
  <div class="bigbox">
       <div class="box">
             <div class="head" v-for="(el,index) in arr" :key="index">
                 <div class="title">
                     <h3>{{el.wtitle}}</h3>
                     <button @click="orderhotel">立即预定</button>
                 </div>
                 <span class="headspan">地址：甘孜州稻城县俄初街与贡嘎路一段交叉口东南100米</span><br>
                 <div class="pic">
                       <div class="bigpic">
                           <img :src="el.wpc1" alt="" @click="open1">
                           <div class="show"><p @click="open1">6张图片</p> </div>
                       </div>
                       <div class="smallpic" @click="open1">
                           <img :src="el.wpc2"  alt="">
                           <img :src="el.wpc3"  alt="">
                           <img :src="el.wpc4"  alt="">
                           <img :src="el.wpc5"   alt="">
                           <img :src="el.wpc1"  alt="">
                       </div>
                 </div>


       <div class="bc" v-if="wode">         
       <div class="showpic" >
           <button class="guanbi" @click="close1">关闭</button>
           <div class="bigpic1"> 
               <img id="imgs" :src="el.wpc1" alt="" >
           </div>
           <span>{{num1}}</span> <span>/5</span>
           <div class="smallpic1" @click="choseimg">
                           <img :src="el.wpc2"  alt="" class="imgp" id="1">
                           <img :src="el.wpc3"  alt="" class="imgp" id="2">
                           <img :src="el.wpc4"  alt="" class="imgp" id="3">
                           <img :src="el.wpc5"  alt="" class="imgp" id="4">
                           <img :src="el.wpc1"  alt="" class="imgp" id="5" >
           </div>
       </div>
       </div> 
        </div>

        <div class="hose">
            <h3>房间预定</h3>
            <!-- 时间选择器 -->
            <div class="timer">
            <div class="block">
            <span class="demonstration">预计入住时间</span>
                       <el-date-picker
                         v-model="value1"
                         type="date"
                         placeholder="选择日期">
                       </el-date-picker>
                     </div>
                     <div class="block">
                       <span class="demonstration">预计离开时间</span>
                       <el-date-picker
                         v-model="value2"
                         align="right"
                         type="date"
                         placeholder="选择日期"
                         :picker-options="pickerOptions">
                       </el-date-picker>
                     </div>

                     <div class="btn">
                       发送
                     </div>
                     </div>

            <div class="tishi">
               <span class="inspan">由于功能尚未完善，选择你的时间点击发送，将会有人工稍后联系你，为您安排，如有不便，敬请谅解！！！</span>
           </div>
            <div class="big">
           <img src="../../assets/wz1.png" alt="">
           </div>


        </div>


        <div class="around">
          <h3>周边景点</h3>
          <p>
              稻城县以亚丁为核心的稻城香格里拉生态旅游区，汇集雪山冰川、湖泊、草原、瀑布等壮丽景观，被誉为“中国香格
里拉之魂“、”蓝色星球上最后一片净士“。
稻城亚丁主要景点有:亚丁自然保护区、热乌寺、兴伊错湖、蒙自大峡谷、杜鹃温泉山庄、东义河、俄初山、牛郎神
山、舍身崖、日生湖、五色海等.</p>
亚丁风景区
<p>位于甘孜州南部稻城县日瓦乡境内，景区海拔2900米至6032米，面积5.6万公顷.
景区以仙乃日、降边央、夏纳多吉三座雪峰为核心区，北南向分布.由于特殊的地理环境和自然气候，形成了独特的地
貌和自然景观，是我国保存较完整的一处自然生态系统.三座雪山相距不远，各自拔地而起，三角鼎立，藏传佛教称
为“日松贡布”，意为三怙主神山.北峰仙乃日海拔6032米，南峰降边央海拔5958米，东峰夏纳多吉海拔5958米，三
座雪山峰峰形各异有雪峰、冰川、森林、溪流、瀑布、草甸等.[8]</p>
热乌寺
<p>位于稻城县色拉乡境内，距县城10公里处，始建于明初，已有600多年的历史，是我县最早的花教寺庙，占地20多亩
寺内现存有珍贵文物“金绘唐卡画10幅”佛像和佛事器具等.</p>
雄登寺
<p>雄登寺别名洋登寺.位于四川省甘孜州藏族自治州稻城县县城10公里处的茹布乡境内，海子山东南面，坐落在冷巴村后
的山上，海拔4105米.“洋登“意为比原翁更寺(系白教寺庙)更山-层楼、更开阔的草原上修建的寺庙.后来由于汉
语音译的关系，变成了“雄登寺” 。该诗建于明永乐十三年(1415年) ，距今已有570多年的历史，庙占地1100余
亩.</p>
海子山
<p>是四川省级自然保护区，位于稻城县与理塘之间，景区内分布大大小小的花岗岩漂砾及形态各异的冰蚀岩盆.
海子山平均海拔4500米，最高峰果银日则海拔为5020米，共有1145个大小海子.其规模密度在我国是独一无二的，故
名海子山.海子山最大的高山湖泊兴伊措海拔4420米，是藏族人心中的圣湖.宽阔的圣湖是百鸟栖息的天堂.</p>
游览须知
<p>稻城亚丁风景区海拔较高，有严重心脏病，哮喘等疾病者不宜进入，出发前可先行服用红景天，肌苷等抗高原反应药
品，并随身携带一些复合维生素，葡萄糖制品及常用药品，带足衣物，防晒防雨用具，手电等，避免在高原上饮酒，居
烈运动，放松心情，进入藏区请尊重当地民风民俗，注重环保.
城最佳旅游季节:每年5月~10月.</p>

        </div>
       </div>

  </div>
 
</template>

<script>
export default {
  methods: {
    orderhotel() {
      window.scrollTo(0, 500);
      alert("数据将发送给后端,请先登录");
    },
    choseimg(e) {
      window.document.getElementById("imgs").src = e.target.src;
      this.num1 = e.target.id;
    },
    open1() {
      this.wode = true;
    },
    close1() {
      this.wode = false;
    },
  },
  data() {
    return {
      arr: [],
      num1: 1,
      wode: false,

      //时间选择
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
  mounted() {
    //    console.log(this.$router.currentRoute.query.id);
    window.scrollTo(0, 0);
    this.$axios(`/getpic?aid=${this.$router.currentRoute.query.id}`).then(
      (res) => {
        this.arr = res.data;
      }
    );
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 1200px;
  height: 1500px;
  background-image: linear-gradient(#c6e2ff, #a0cfff, #a0cfff, #a0cfff);
  margin: 10px auto;
  .head {
    width: 100%;
  }
}
.title {
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    color: white;
    background-color: #f60 !important;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    display: inline-block;
    width: 500px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: auto;
  }
}
.headspan {
  font-size: 14px;
  color: #999;
}
.pic {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  .bigpic {
    width: 48%;
    img {
      width: 100%;
    }
    .show {
      width: 100px;

      text-align: center;
      line-height: 50px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      position: relative;
      top: -66px;
      left: 453px;
    }
  }
  .smallpic {
    height: 332px;
    width: 48%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    img {
      width: 173px;
      height: 140px;
    }
  }
}
.bc {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  z-index: 18;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  .showpic {
    width: 900px;
    height: 436px;
    // background-color: brown;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    .bigpic1 {
      img {
        width: 580px;
        height: 310px;
      }
    }
    .guanbi {
      position: absolute;
      right: 0px;
    }
    .smallpic1 {
      width: 100%;
      height: 100px;
      // background-color: chartreuse;
      text-align: center;
      line-height: 100px;
      img {
        margin: 0px 5px;
        width: 158px;
        height: 100px;
      }
      img:hover {
        transform: translateY(-5px);
        transition: all 1s;
      }
    }
  }
}
.hose {
  width: 100%;
  height: 600px;
  border-top: 1px solid grey;

}
.timer {
  display: flex;
  width: 760px;
  justify-content: space-between;
}
.block {
  margin: 5px 0px;
}
// 时间选择器
.big {
  width: 100%;
  img {
    width: 100%;
  }
}
.around {
  border-top: 1px solid grey;
  width: 100%;
  height: auto;
}
.tishi {
  width: 100%;
  height: auto;
  span {
    color: red;
  }
  
}
.btn {
  width: 68px;
  height: 40px;
  background-color: rosybrown;
  text-align: center;
  line-height: 40px;
  margin-top: 5px;
  border-radius: 6px;
  color: white;
}
.btn:hover{
  background-color: #f60;
  cursor: pointer;
}
</style>