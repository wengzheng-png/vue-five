<template>
    <div class="box">
    <div class="content">
    <img :src="cargoods.img" class="mygoods-img" />
    <div class="right">
        <span class="cargoods-name">{{ cargoods.leixing }}</span>
        <img src="http://www.ezout.cn/uploads/icon/bcy.png" alt="" class="mini-img">
        <img src="http://www.ezout.cn/uploads/icon/jp.png" alt="" class="mini-img2">
        <img src="http://www.ezout.cn/uploads/icon/jx.png" alt="" class="mini-img2">
        <div class="img2">
            <img src="http://www.ezout.cn/uploads/icon/myy.png" alt="" class="mini-img">
        <img src="http://www.ezout.cn/uploads/icon/sjt.png" alt="" class="mini-img">
        <img src="http://www.ezout.cn/uploads/icon/th.png" alt="" class="mini-img2">
        <img src="http://www.ezout.cn/uploads/icon/zjy.png" alt="" class="mini-img">
        <img src="http://www.ezout.cn/uploads/icon/zyx.png" alt="" class="mini-img">
        </div>
        <div class="cargoods-price"><span class="price-icon">￥</span>{{cargoods.price}}<span class="price-icon">起</span></div>
      <div class="cargoods-text">{{ cargoods.text }}</div>
        <div class="after">
            <span class="afteritem">销量：{{cargoods.total}}</span>
            <span class="afteritem2">满意度：{{cargoods.satisfaction}}</span>
            <span class="afteritem3">热评：{{cargoods.recommend}}</span>
        </div>
        <div class="tel">租车热线：400-400-40</div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
         props: ["cargoods"],
    }
</script>

<style scoped>
.tel{
    color: rgb(30, 178, 223);
    font-size: 14px;
    margin: 20px 0 0 10px;
}
.mini-img{
    width: 50px;
    height: 15px;
    margin-left: 10px;
}
.mini-img2{
    width: 34px;
    height: 15px;
    margin-left: 10px;

}
.img2{
    margin-top: 6px;
}
.box{
    width: 1100px;
    padding: 15px;
    border: 3px solid #d8d8d8;
    margin: 0 auto;
    margin-bottom: 20px;
}
.content{
    display: flex;
}
.mygoods-img{
    width: 460px;
    height: 312px;
}
.right{
    margin-left: 30px;
}
.cargoods-name{
    font-size: 20px;
     color: #ff6316;
   font-weight: bold;
    margin-left: 8px;
}
.cargoods-price{
    font-size: 24px;
    font-weight: 500;
    color: #fc6000;
    width: 230px;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background: #fff4e4;
    margin: 20px 0 0 10px;
}
.price-icon{
    line-height: 40px;
    padding-left: 10px;
    font-size: 14px;
}
.cargoods-text{
    color: #333;
    width: 394px;
    line-height: 22px;
    font-size: 14px;
    padding: 8px;
    margin: 20px 0 0 10px;
    border: 1px solid #ccc;
}
.after{
    margin: 30px 0 0 10px;
    color: #333;
}
.afteritem2,
.afteritem3{
    padding-left: 68px;
}
</style>