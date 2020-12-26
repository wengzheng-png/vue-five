<template>
  <div class="bigbox">
      <div class="box">
        <div class="bianlan">
<el-row class="tac">
  <el-col :span="12">
    <h3 class="h3">会员中心</h3>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>我的订单</span>
        </template>
        <el-menu-item-group>
           <template slot="title">全部订单</template>
          <el-menu-item index="1-2"><router-link to="/myOrder">我的订单</router-link></el-menu-item>
          <el-menu-item index="orderquery"><router-link to="/orderquery">租车自驾订单</router-link></el-menu-item>
          <el-menu-item index="1-2">景点门票订单</el-menu-item>
          <el-menu-item index="1-2">户外旅游订单</el-menu-item>
          <el-menu-item index="1-2">旅游包车订单</el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">我的游记</span>
      </el-menu-item>
     
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">我的积分</span>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">我的钱包</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
        </div>
           <div class="xinxi">
        <img :src="img" ref="img1" class="img2">
      
        <input type="file" class="file" ref="headpic" @change="shangchuan(this)"><br>
        <span class="span1">手机号码</span><span></span><input class="inp1" type="text" v-model="tel" onfocus="this.blur();">   
        <span class="span2">昵称</span><input class="inp2" type="text" v-model="nickname">
        <span class="span3">个性签名</span><input class="inp3" type="text" v-model="label">   
        <button @click="change1" class="btn">提交</button>
        </div>
      </div>
      <div class="conten">
        <p class="ptext1"><i class="im">猜你喜欢</i></p>
      <div class="casecont" v-for="(el,index) in arr" :key="index">
        <div class="xiaocase"><img :src="require('../../../public/lightimg/'+el.img3+'.jpg')" alt="" class="img3" ><p class="pname" v-text="el.text"></p><router-link to="/xiangqing" class="rout3">欢迎您！</router-link>
        <button class="btn3" >电询</button>
        </div>
      </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
    headpic:"",
    img:this.personinfo1,
    img1:'',
    nickname:this.personinfo.nickname,
    label:this.personinfo.label,
    tel:this.personinfo.tel,
     arr:[{img3:"hai",text:"伍须海"},
        {img3:"yunhai",text:"伍须海"},
        {img3:"hlong",text:"九寨沟"},
        {img3:"chuanxibadanzangzhai",text:"川西"},
        {img3:"miya",text:"新路海"},
        {img3:"tao",text:"九寨沟"},
        {img3:"xue",text:"毕沟棚"},
        {img3:"cheng",text:"古城"}]
    }
  },
props:["personinfo","personinfo1"],

mounted() {
  if(!this.img){
    console.log(this.img,1231);
    this.$refs.img1.src = require('../../../public/lightimg/head.jpg');
  }
},
        
methods: {
  shangchuan(){
    //将图片提交预览
    let file = this.$refs.headpic.files[0];
    URL.createObjectURL(file)
    this.img = URL.createObjectURL(file);
    console.log(this.img,122121);
  },
 async change1(){
    var url = "/headpic";
    var data = new FormData();
    data.append("headpic",this.$refs.headpic.files[0]);
    console.log(this.$refs.headpic.files[0],2121);
    data.append("nickname",this.nickname);
    data.append("label",this.label);
    if(!this.$refs.headpic.files[0]){
    confirm("请选择图片");
    }
    else
    {
let res = await this.$axios.post(url,data);
    this.img = res.data.res2.headpic1;
    alert("恭喜你，修改成功")
    }
  },
  
},
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

.bigbox{
   width: 1530px;
}

.box {
  width: 1500px;
  height: 450px;
  border-radius: 8px;
  position: relative;
}

.file {
  width: 98px;
  height: 98px;
  border: 0.5px solid #456;
  opacity: 0;
  text-align: center;
  position: absolute;
  top: 60px;
  left: 40px;
}

.img2 {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 60px;
  left: 90px;
  margin-left:-50px ;
  border-radius: 5px;
}

.span1,.span2,.span3{
  width: 70px;
  height: 30px;
  display: inline-block;
  position: absolute;
  margin-bottom: 30px;
  left: 180px;
  text-align: center;
line-height: 30px;
}

.im{
  position: absolute;
  left: 30px;
  color: #333;
  width:100px;
  height: 38px;
  line-height: 50px;
  padding-left: 34px;
  margin-top: 10px;
  font-size: 18px;
  background-image: url('../../../public/lightimg/jingl.png');
  background-repeat: no-repeat;
  background-position: -155px -56px;
}

.xinxi{
  top: 50px;
  width: 500px;
  height: 350px;
  background-color: rgba(36, 73, 238, 0.219);
  left: 550px;
  position: relative;
  border: 0.5px solid #ccc;

}

.span1,.inp1 {
  top:60px;
}
.span2,.inp2 {
  top: 110px;
}
.span3,.inp3 {
  top: 160px;
}
.inp1,.inp2,.inp3{
height: 30px;
position: absolute;
width: 160px;
padding-left: 10px;
border: none;
border-radius: 5px;
left: 280px;
}
.btn{
  position: absolute;
  top: 240px;
  width: 60px;
  height: 30px;
  left: 50%;
  margin-left: -30px;
}

.bianlan{
  position: absolute;
  width: 300px;
  height: 350px;
  top: 50px;
  left: 160px;
  background-color: #fff;
}
.h3{
  height: 50px;
  background-color: rgb(37,119,227);
  line-height: 50px;
  color: #fff;
}

.tac{
  width: 600px;
  height: 450px;
}

.casecont {
  position: relative;
  background-color: #fff;
  margin-top: 20px;
}

.xiaocase{
  width: 200px;
  height: 240px;
  background-color: rgba(224, 217, 217, 0.2);  
  float: right;
  margin-right: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.img3{
  width: 180px;
  height: 150px;
  display: block;
  margin: auto;
  margin-top:10px;
  cursor: pointer;  
  transition: all 0.6s;  
}

.img3:hover {
  transform: scale(1.1);  
}

.pname {
  margin: 10px;
}

.ptext1{
  width: 800px;
  height: 60px;
  border-bottom: 1px solid #555;
  margin: auto;
}

.conten {
  position: relative;
  left: 10px;
  width: 880px;
  height: 580px;
  margin: auto;
  background-color: #fff;
  border: 0.5px solid #ccc;
}
.rout3{
  display: inline-block;
  width: 80px;
  height: 25px;
  text-decoration: none;
  color: rgb(71, 68, 60);
  text-align: center;
  line-height: 25px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-family: 600;
  font-size: 16px;
}

.btn3 {
  display: inline-block;
  width: 60px;
  height: 25px;
  text-decoration: none;
  color: orange;
  text-align: center;
  line-height: 25px;
  margin-left: 50px;
  margin-bottom: 10px;
  font-family: 900;
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: rgba(207, 204, 204, 0);  
}

</style>