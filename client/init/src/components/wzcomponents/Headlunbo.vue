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
        <ul>
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
              <!-- <router-link to="/show" tag="div"> -->
                <div class="smallbox">

                  <router-link to="/show" tag="div"> 
                  <div class="part" >
                    <img src="http://www.ezout.cn/uploads/2019/0115/4251096c8ac0deb399ac23a0fd7787ef_224x119.jpg" alt="" srcset="" />
                    <span class="title" >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落花湖4~6人6日之旅</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  </router-link>
                  
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/f0aaa2186850b39d49ee7f5a8abba632_224x119.jpg" alt="" srcset="" />
                    <span class="title" >【九黄甘南】九寨沟 扎尕那 毕棚沟 黄龙 九曲黄河第一湾 花湖川西环线4~6人6日之旅</span>
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0be8ae21bc2923406080d0f73ebfc040_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【九黄毕棚】毕棚沟 浮云牧场 九寨沟 黄龙 网红打卡鹧鸪山4~6人4日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【九寨涅槃】九寨沟 黄龙 都江堰 松坪沟 熊猫基地 叠溪海子 牟尼沟4~6人3日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/bbfb8e183290117986d86622ff452d82_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【九黄黑毕】九寨沟 达古冰川 毕棚沟 鹧鸪山滑雪 黄龙4~12人5日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0ef2b8d2f6fafd9e9a21321297e36aba_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【九黄环线】九寨沟 花湖 九曲黄河第一湾 黄龙 达古冰川 毕棚沟 川西环线4~12人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                </div>
              <!-- </router-link> -->
            </el-tab-pane>
            <el-tab-pane label="稻城亚丁" name="2">      <router-link to="#" tag="div">
                <div class="smallbox">
                  <div class="part" >
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1999648822,3390537001&fm=26&gp=0.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2774956471,3666891912&fm=26&gp=0.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2415656262,341207431&fm=26&gp=0.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=834654462,3897377310&fm=26&gp=0.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2517400202,3154406075&fm=26&gp=0.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1238323726,2429411175&fm=26&gp=0.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                </div>
              </router-link></el-tab-pane>
            <el-tab-pane label="318川藏线" name="3">      <router-link to="#" tag="div">
                <div class="smallbox">
                  <div class="part" >
                    <img src="http://www.ezout.cn/uploads/2019/0115/4251096c8ac0deb399ac23a0fd7787ef_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/f0aaa2186850b39d49ee7f5a8abba632_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0be8ae21bc2923406080d0f73ebfc040_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/bbfb8e183290117986d86622ff452d82_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0ef2b8d2f6fafd9e9a21321297e36aba_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                </div>
              </router-link></el-tab-pane>
            <el-tab-pane label="色达" name="4">      <router-link to="#" tag="div">
                <div class="smallbox">
                  <div class="part" >
                    <img src="http://www.ezout.cn/uploads/2019/0115/4251096c8ac0deb399ac23a0fd7787ef_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/f0aaa2186850b39d49ee7f5a8abba632_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0be8ae21bc2923406080d0f73ebfc040_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/bbfb8e183290117986d86622ff452d82_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0ef2b8d2f6fafd9e9a21321297e36aba_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                </div>
              </router-link></el-tab-pane>
            <el-tab-pane label="冷嘎措" name="5">      <router-link to="#" tag="div">
                <div class="smallbox">
                  <div class="part" >
                    <img src="http://www.ezout.cn/uploads/2019/0115/4251096c8ac0deb399ac23a0fd7787ef_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/f0aaa2186850b39d49ee7f5a8abba632_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0be8ae21bc2923406080d0f73ebfc040_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/bbfb8e183290117986d86622ff452d82_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0ef2b8d2f6fafd9e9a21321297e36aba_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                </div>
              </router-link></el-tab-pane>
            <el-tab-pane label="峨眉山" name="6">      <router-link to="#" tag="div">
                <div class="smallbox">
                  <div class="part" >
                    <img src="http://www.ezout.cn/uploads/2019/0115/4251096c8ac0deb399ac23a0fd7787ef_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/f0aaa2186850b39d49ee7f5a8abba632_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0be8ae21bc2923406080d0f73ebfc040_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/bbfb8e183290117986d86622ff452d82_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                  <div class="part">
                    <img src="http://www.ezout.cn/uploads/2019/0115/0ef2b8d2f6fafd9e9a21321297e36aba_224x119.jpg" alt="" srcset="" />
                    <span class="title"
                      >【行色九黄】色达 九寨沟 黄龙 九曲黄河第一湾日落
                      花湖4~6人6日之旅</span
                    >
                    <div class="price">
                      <span class="spanl">100% 满意</span>
                      <span class="spanr">￥3380</span>
                    </div>
                  </div>
                </div>
              </router-link></el-tab-pane>
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
       activeName3:"1",
       activeName4:"1",
       activeName5:"1",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
  height: 900px;
  margin: 10px auto;
  background: aqua;
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
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
}
.main-two .left {
  width: 25%;
  height: 100%;
  background-color: violet;
  img{
    width: 100%;
    height: 82%;
    margin-top: 10px;
  }
}
.main-two .right {
  width: 74%;
  height: 100%;
  background-color: violet;
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
    background-color: royalblue;
    .spanl {
      position: relative;
      bottom: -21px;
      left: -24px;
      color: #999;
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
    
}

</style>