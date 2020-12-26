<template>
  <div class="box">
    <el-carousel :interval="5000" arrow="always" height="420px">
      <el-carousel-item>
        <img src="../../assets/index.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/index2.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/index3.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/index4.png" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="main">
      <div class="main-one">
        <ul  @click="tiaozhaun"> 
          <li><img src="http://www.ezout.cn/uploads/2020/1203/e10401b6434e8172419a56ff9fbf55bf_298x158.jpg" alt="">
               <span>【仙境女儿国】泸沽湖环湖 海螺沟 西昌卫星发射基地 螺髻山99里温泉 东方女儿国4~12人6日之旅</span>
                 <p>特惠价:3380￥起</p>
          </li>
          <li><img src="http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_298x158.jpg" alt="">
          <span>【九寨涅槃】九寨沟 黄龙 都江堰 松坪沟 熊猫基地 叠溪海子 牟尼沟4~6人3日之旅</span>
            <p>特惠价:3280￥起</p>
          </li>
          <li><img src="http://www.ezout.cn/uploads/2019/0115/0be8ae21bc2923406080d0f73ebfc040_298x158.jpg" alt="">
          <span>【九黄毕棚】毕棚沟 浮云牧场 九寨沟 黄龙 网红打卡鹧鸪山4~6人4日之旅</span>
          <p>特惠价:3080￥起</p>
          </li>
        </ul>
      </div>

      <div class="clean"></div>
      <!-- 浮动清除 -->
       
      
      <div class="main-two">
        <div class="left">
           <h1>四川</h1>
           <img src="http://www.ezout.cn/uploads/2019/0115/f1dbdbb6c90e24142287969aa7558ab7_224x410.jpg" alt="">
        </div>
        <div class="right">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="九寨沟" name="1">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr1" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc1" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>
             <el-tab-pane label="稻城亚丁" name="2">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr1" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc2" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>318川藏线 色达 冷嘎措 峨眉山
              <!-- </router-link> -->
            </el-tab-pane>

           <el-tab-pane label="318川藏线" name="3">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr1" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc3" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

              <el-tab-pane label="色达" name="4">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr1" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc4" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

             <el-tab-pane label="冷嘎措" name="5">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr1" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc5" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

              <el-tab-pane label="峨眉山" name="6">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr1" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc6" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

            
          

          </el-tabs>
        </div>
      </div>


       <div class="main-two">
        <div class="left">
           <h1>西藏</h1>
           <img src="http://www.ezout.cn/uploads/2019/0115/d69bc5a2877dfeeb2a2f1302c119f631_224x410.jpg" alt="">
        </div>
        <div class="right">
          <el-tabs v-model="activeName2" @tab-click="handleClick">
            <el-tab-pane label="拉萨" name="7">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid" tag="div" v-for="el in arr2" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc1" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>
             <el-tab-pane label="灵芝" name="2">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr2" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc2" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

           <el-tab-pane label="纳木措" name="3">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr2" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc3" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

              <el-tab-pane label="珠峰" name="4">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr2" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc4" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

             <el-tab-pane label="米堆冰川" name="5">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr2" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc5" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

              <el-tab-pane label="波密" name="6">     
              <!-- <router-link :to="'/hotelinfo?id='+el.wid"  tag="div"> -->
                <div class="smallbox">

                  <router-link :to="'/hotelinfo?id='+el.wid"  tag="div" v-for="el in arr2" :key="el.wid"> 
                  <div class="part" >
                    <img :src="el.wpc6" alt="" srcset="" />
                    <span class="title" >{{el.wtitle}}</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥{{el.wprice}}</span>
                    </div>
                  </div>
                  </router-link>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>

            
          

          </el-tabs>
        </div>
      </div>
    
    </div>
    
   
  </div>
</template>

<script>
export default {
  //选项卡
  data() {
    return {
      activeName:"1",
      activeName2:"7",
       arr1:[],
       arr2:[],
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    tiaozhaun(){
      this.$router.push("/hotelinfo?id=5")
    }
  },
  mounted() {
     this.$axios("/askpic").then((res)=>{
      //  console.log(res.data)
       var arr=res.data
        this.arr1 = arr.slice(0,6) 
         this.arr2 = arr.slice(6,13)  
      })
  },
};
</script>

<style scoped lang="scss">
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  height: 420px !important;
  width: 100%;
}
.main {
  width: 1200px;
  height: 1360px;
  margin: 10px auto;
  // background: aqua;
}
.main-one {
  width: 100%;
  height: 350px;
  background-image: url("http://www.ezout.cn/plugins/line/public/images/index-tj-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 350px;
}
.main-one ul {
  display: flex;
  width: 75%;
  height: 80%;
  /* background-color: violet; */
  float: right;
  margin-top: 30px;
  justify-content: space-evenly;
}
.main-one ul li {
  list-style: none;
  display: inline-block;
  background-color: whitesmoke;
  overflow: hidden;
  width: 31%;
  height: 100%;
  img {
    width: 100%;
    height: 170px;
  }
  img:hover {
    transform: scale(1.2);
    transition: all 2s;
  }
  span{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  }
  p{
     margin: 15px 0px;
     color: #f60;
     font-size: 18px;
  }
}
.main-two {
  width: 100%;
  height: 500px;
  // background-color: tomato;
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
}
.main-two .left {
  width: 25%;
  height: 100%;
  // background-color: violet;
  img{
    width: 100%;
    height: 82%;
    margin-top: 10px;
  }
}
.main-two .right {
  width: 74%;
  height: 100%;
  // background-color: violet;
}
.clean {
  clear: both;
}
.part {
  width: 225px;
  height: 200px;
  //   background-color: red;
  text-align: center;
  overflow: hidden;
  margin-top: 3px;
  border: 1px solid #ccc;
  img {
    width: 100%;
    height: 120px;
  }
  img:hover{
    transform: scale(1.2) ;
    transition: all 2s;
  }
  
  .title {
    font-size: 16px;
    display: inline-block;
    width: 206px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .price {
    display: inline-block;
    width: 87%;
    height: 45px;
    // background-color: royalblue;
    .spanl {
      position: relative;
      bottom: -21px;
      left: -24px;
      color: #888;
    }
    .spanr {
      position: relative;
      bottom: -20px;
      right: -22px;
      color: #f60;
      font-size: 20px;
    }
  }
}
.smallbox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border: 1px solid lightgray;
    
}

</style>