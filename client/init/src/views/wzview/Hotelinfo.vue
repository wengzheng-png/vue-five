<template>
  <div class="bigbox">
       <div class="box">
             <div class="head">
                 <div class="title">
                     <h3>稻城亚丁沿途酒店代订服务</h3>
                     <button @click="orderhotel">立即预定</button>
                 </div>
                 <span class="headspan">地址：甘孜州稻城县俄初街与贡嘎路一段交叉口东南100米</span><br>
                 <div class="pic">
                       <div class="bigpic">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                           <div class="show"><p>6张图片</p> </div>
                       </div>
                       <div class="smallpic">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                           <img src="http://www.ezout.cn/uploads/2019/0115/a9e1555600d5d9eb96b5d664d46cba27_600x320.jpg" alt="">
                       </div>
                 </div>
             </div>
       </div>
  </div>
</template>

<script>
export default {
   methods: {
       orderhotel(){
           window.scrollTo(0,2000)
       }
   },
}
</script>

<style scoped lang="scss"> 
.box {
    width: 1200px;
    height: 900px;
    background-image: linear-gradient(#C6E2FF,#A0CFFF,#66B1FF,#53A8FF);
    margin:10px auto;
    .head{
        width: 100%;
    }
}
.title{
    display: flex;
    justify-content: space-between;
   
    button {
        padding: 10px 20px;
        color: white;
        background-color: #f60 !important;
    }
    h3{
        font-size: 24px;
        font-weight: 500;
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
    .bigpic{
        width: 48%;
        img {
            width: 100%;
        }
        .show{
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
    .smallpic{
        height: 332px;
         width: 48%;
         display: flex;
         justify-content:space-evenly;
         flex-wrap: wrap;
        img {
            width: 173px;
            height: 140px;

        }

    }
}
</style>