<template>
  <div class="box">
      <img class="headimg" src="http://www.ezout.cn/uploads/2020/1216/8851d63febc9fde33484774bb7c8276f_1920x400.jpg" alt="">
      <div class="icon">
          <div class="inicon">
              <img src="@/assets/price.png" alt="">
               <div class="des">
               <h3>价格保障</h3>
               <span>阳光价格 公开透明</span>
               </div>
          </div>
          <div class="inicon">
               <img src="@/assets/serve.png" alt="">
               <div class="des">
               <h3>服务保障</h3>
               <span>优质服务 专属客服</span>
               </div>
          </div>
          <div class="inicon">
               <img src="@/assets/inh.png" alt="">
                <div class="des">
               <h3>入住保障</h3>
               <span>快速确认 到店有房</span>
               </div>
          </div>
      </div>
      <div class="tedian">
           <div class="intedian">
                <h1>酒店特点</h1>
                <div class="part">
                <router-link tag="div" class="hpic" to="#">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3683069277,1725156816&fm=26&gp=0.jpg" alt="">
                    <h3>豪华酒店</h3>
                </router-link>
                <router-link tag="div" class="hpic" to="#">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1836954608,2055496952&fm=26&gp=0.jpg" alt="">
                    <h3>活动集会</h3>
                </router-link>
                <router-link tag="div" class="hpic" to="#">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2593181418,1792937564&fm=26&gp=0.jpg" alt="">
                    <h3>温馨情侣</h3>
                </router-link>
                <router-link tag="div" class="hpic" to="#">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3635067912,1771140903&fm=26&gp=0.jpg" alt="">
                    <h3>商务酒店</h3>
                </router-link>
                <router-link tag="div" class="hpic" to="#">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=275735347,1572509020&fm=26&gp=0.jpg" alt="">
                    <h3>休闲度假</h3>
                </router-link>
                <router-link tag="div" class="hpic" to="#">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1863211615,922892850&fm=26&gp=0.jpg" alt="">
                    <h3>异国主题</h3>
                </router-link>
                </div>
             
            
           </div>

      <div class="hot">
          <h1>热门酒店</h1>
          <div class="inhot"> 
                <router-link to="#" class="linkhot" tag="div" v-for="(el,index) in partarr" :key="index">
                               <img :src="el.img" alt="">
                               <div class="inlink">
                                    <span class="title">{{el.title2}}</span><br>
                                   <span class="spanp">100%</span>
                                   <span class="spanc">满意</span>
                                   <span class="sapnn">·0条住客点评</span>
                                   <span class="price">电询</span>
                                </div>                        
                </router-link>

                
          </div>
      </div>

      <router-link  class="last" to="#" tag="div">点击加载更多></router-link>
      </div>


  </div>
</template>

<script>
export default {
      data() {
          return {
              partarr:[
                  {img:"http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_285x160.jpg",title2:"稻城亚丁沿途酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0115/28c3318ee066b6ecdf30b54df6614186_285x160.jpg",title2:"川主寺酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0115/7ce9998f0882ee0b2c442e1ee8856e20_285x160.jpg",title2:"新都桥酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0115/f0aaa2186850b39d49ee7f5a8abba632_285x160.jpg",title2:"唐克酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0115/0a90e08b70ae6d4e36b736c08c95b954_285x160.jpg",title2:"若尔盖酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0115/6e41a2cd51e8cee70525d30645120553_285x160.jpg",title2:"黄龙酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0115/74e5b315040c12233a89c5583345b100_285x160.jpg",title2:"九寨沟酒店代订服务"},
                  {img:"http://www.ezout.cn/uploads/2019/0306/aa66a4a097fbad0ee14eafe55280e350_285x160.jpg",title2:"茂县酒店代订服务"},
                  ]
          }
      },
}
</script>

<style scoped lang="scss">
.box {
    width: 100%;
    height: auto;
}
.headimg {
    width: 100%;
    height: 420px;
}
.box {
    .icon{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 15px 0px;
        .inicon {
            width: 203px;
            height: 70px;
            display: flex;
            justify-content: space-between;
         
            img {
                width: 60px;
                height: 60px;
            
            }
            .des{
                margin-top: 6px;
                margin-left: 10px;
                width: 146px;
                height: 50px;
                span{
                        font-size: 14px;
                        color: #666;
                }
            }
        }
    }
}
.tedian {
    width: 1200px;
    height: auto;
    margin: 15px auto;
    border-left: 1px solid lightgray;
    .intedian{
        width: 100%;
        height: 1100px;
        // background-color: blueviolet;
        .part{
            margin-top: 15px;
            width: 100%;
            height: auto;
           
            // background-color: brown;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            
            img{
                width: 500px;
                height: 310px;
            }
            h3{
               color: red;
               position: relative;
               top: -175px;
               left: 205px;
            }
        }
    }
}
.hpic {
       width: 500px;
       height: 310px;
       overflow: hidden;
       margin: 15px auto;
}
.hpic:hover{
     box-shadow:5px 5px 30px gold ;
     -webkit-box-shadow:5px 5px 30px gold;
    -moz-box-shadow:5px 5px 30px gold ;
    -o-box-shadow:5px 5px 30px gold;
}
.hot {
    width: 100%;
    height: auto;
    // background-color: lightgreen;
    .inhot {
        width: 100%;
        height: 550px;
        // background-color: lightsalmon;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       
    }
    }
.linkhot{
    height: 233px;
    // background-color: limegreen;
    width: 297px;
    margin-top: 20px;
    img{
        width: 100%;
        border-radius: 10px;

    }
    .title {
        font-size: 17px;
    }
    .spanp{
        margin-top: 10px;
        display: inline-block;
        width:50px;
        background-color: #5377A9;
        border-radius: 8px;
        border-bottom-left-radius: 0px;
    }
    .spanc {
        font-size: 14px;
        color: #5377A9;
    }
    .sapnn{
          font-size: 14px;     
    }
    .price{
        font-size: 20px;
        font-weight: 600;
        color: #f60;
        padding-left: 96px;
    }
}
.linkhot:hover {
    transform: translateY(-10px);
    transition: all 0.5s;
}
.last {
    margin: 20px auto;
    width: 200px;
    height: 50px;
    text-align: center;
    background-color: lightgray;
    line-height: 50px;
    border-radius: 8px;
}
.last:hover{
    cursor: pointer;
    background-color: orange;
}
</style>