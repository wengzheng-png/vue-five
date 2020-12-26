<template>
    <div class="bigbox">
<div class="box" v-for="(el,index) in arr" :key="index">
<div class="case"><img :src="require('../../../public/lightimg/'+el.img+'.jpg')" alt="" class="img" ><p class="pname" v-text="el.text"></p><router-link to="/xiangqing" class="rout">欢迎您！</router-link><button class="btn" >电询</button></div>

</div>
    </div>
</template>

<script>
    export default {

data() {
  return {
        arr:[{img:"qiu",text:"伍须海"},
        {img:"miya",text:"伍须海"},
        {img:"tao",text:"九寨沟"},
        {img:"sigul",text:"川西"},
        {img:"xueshan",text:"新路海"},
        {img:"bigoup",text:"九寨沟"},
        {img:"hlong",text:"毕沟棚"},
        {img:"cheng",text:"古城"}]
  }
},}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.bigbox{
  position: absolute;
  top: 50px;
  left: 10px;
  width: 870px;

}
.case{
  width: 200px;
  height: 240px;
background-color: rgba(224, 217, 217, 0.2);  
float: right;
  margin-right: 15px;
  margin-top: 10px;
  border-radius: 10px;
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

.btn {
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