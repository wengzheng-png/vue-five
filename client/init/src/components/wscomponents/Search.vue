<template>
  <div>
    <div class="searchbox">
      <input type="text" v-model="keyword" name="search" class="search" placeholder="我要去......" />
      <button class="scbtn" @click="fn()">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      keyword:""
    }
  },
  methods:{
    fn(){
      this.$router.push("/toplace")
      var url = "/search";
      this.$axios(url,{params:{keyword:this.keyword}})
      .then((res) => {
          // 后端返回的数据显示
          var name = res.data[0].name
          var img = res.data[0].img
          var text = res.data[0].text
          // 缓存对应的数据
          localStorage.setItem("name",name)
          localStorage.setItem("img",img)
          localStorage.setItem("text",text)

      });
    }
  }
    
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.searchbox {
  width: 500px;
  height: 50px;
  background-color: #ff6700;
  border-radius: 25px;
  overflow: hidden;
  position: absolute;
  top: 300px;
  left: 160px;
}
.search {
  width: 400px;
  height: 42px;
  border-radius: 25px;
  outline: none;
  border: none;
  padding-left: 30px;
  margin-left: 5px;
  box-sizing: border-box;
}
.scbtn {
  width: 80px;
  height: 45px;
  border-radius: 25px;
  outline: none;
  color: #fff;
  font-size: 18px;
  box-sizing: border-box;
  border: none;
  background-color: #ff6700;
}
</style>