<template>
  <div class="bigbox">
      <div class="box">
       
        <img :src="img">
        <input type="file" class="file" ref="headpic" @change="shangchuan(this)"><br>
        <span class="span1">昵称</span><input class="inp1" type="text" v-model="nickname">
        <span class="span2">个性签名</span><input class="inp2" type="text" v-model="label">   
        <button @click="change1" class="btn">提交</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    headpic:"",
    img:this.personinfo1,
    nickname:this.personinfo.nickname,
    label:this.personinfo.label
    }
  },
props:["personinfo","personinfo1"],

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
  position: relative;
  top: 100px;
  width: 2030px;
  height: 500px;
  background-image: url("../../../public/lightimg/06.jpg");
  background-size: 2030px 500px;
  background-repeat: no-repeat;
}
.box {
  width: 330px;
  height: 420px;
  border: 2px solid rgb(98, 100, 96);
  border-radius: 8px;
  position: relative;
  right: -60%;
  background-color: rgba(183, 212, 155, 0.6);
}
.file {
  width: 90px;
  height: 90px;
  border: 0.5px solid #456;
  opacity: 0;
  text-align: center;
  position: relative;
  top: 80px;
}

img {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  top: 80px;
  left: 50%;
  margin-left:-50px ;
  border-radius: 5px;
  /* background-image: url('../../../public/02.jpg');
  background-size: 100px 100px;
  background-repeat: no-repeat; */
}

.span1,.span2 {
  width: 70px;
  height: 30px;
  display: inline-block;
  position: absolute;
  margin-bottom: 30px;
  left: 30px;
  text-align: center;
line-height: 30px;
}

.span1,.inp1 {
  top:230px;
}
.span2,.inp2 {
  top: 280px;
}
.inp1,.inp2{
 height: 30px;
position: absolute;
width: 160px;
padding-left: 10px;
border: none;
border-radius: 5px;
left: 120px;
}
.btn{
  position: absolute;
  top: 350px;
  width: 60px;
  height: 30px;
  left: 50%;
  margin-left: -30px;
}

</style>