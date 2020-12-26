<template>
  <div class="bigbox">
<div class="box1">
<div class="case1"><img src="../../../public/lightimg/wuhai.jpg" alt="" class="img" @click="click"><p class="pname">伍须海</p><router-link to="/xiangqing" class="rout" @click="click">电询</router-link><button class="btn" @click="click">抢购</button></div>
<div class="case2"><img src="../../../public/lightimg/hai.jpg" alt="" class="img" @click="click"><p class="pname">海螺沟森林公园</p><router-link to="/xiangqing" class="rout" @click="click">电询</router-link><button class="btn" @click="click">抢购</button></div>
<div class="case3"><img src="../../../public/lightimg/hlong.jpg" alt="" class="img" @click="click"><p class="pname">黄龙</p><router-link to="/xiangqing" class="rout" @click="click">电询</router-link><button class="btn" @click="click">抢购</button></div>
<div class="case4"><img src="../../../public/lightimg/cheng.jpg" alt="" class="img" @click="click"><p class="pname">阆中古城</p><router-link to="/xiangqing" class="rout" @click="click">电询</router-link><button class="btn" @click="click">抢购</button></div>
</div>
  </div>
</template>

<script>
  export default {
    methods: {
      jiagou(){},
      click(){
        this.$router.push("/xiangqing")
      }
    },
  }
</script>

<style lang="scss" scoped>
.bigbox {
  top: 30px; 
  width: 100%;
  position: relative;
}
.box1 {
  width: 1100px;
  height: 260px;
  background-image: url('../../../public/lightimg/bei3.jpg');
  border-radius: 20px;
  margin: auto;
  position: relative;
}

.box1::after {
  display: block;
  content: "";
  clear: both;
}

.case1,
.case2,
.case3,
.case4{
  width: 200px;
  height: 240px;
background-color: #fff;  
float: right;
  margin-right: 15px;
  margin-top: 10px;
}

.img{
  width: 180px;
  height: 150px;
  display: block;
  margin: auto;
  margin-top:10px;
  cursor: pointer;  
 transition: all 0.6s;  
}

.img:hover {
  transform: scale(1.1);  
}

.pname {
  margin: 10px;
}

.rout{
  display: inline-block;
  width: 45px;
  height: 25px;
  text-decoration: none;
  color: orange;
  text-align: center;
  line-height: 25px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-family: 900;
  font-size: 18px;
}

.btn {
  display: inline-block;
  width: 50px;
  height: 28px;
  margin-left: 90px;
  background-color: orange;
  border: none;
  font-family: 900;
  font-size: 18px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

}
</style>