<template>
<div class="content">
  <div class="box">
    <img :src="carcomment.carimg" alt="" class="comment-img" />
    <div class="right">
    <div v-html="carcomment.name" class="comment-name"></div>
    <span v-html="carcomment.username" class="comment-username"></span>
    <span v-html="carcomment.time" class="comment-time"></span>
    <div v-html="carcomment.text" class="comment-text"></div>
    <div class="comment-score"></div>
    </div>
  </div>
  <hr>
  </div>
</template>

<script>
export default {
  props: ["carcomment"],
};
</script>

<style scoped>
hr{
    color: #ccc;
}
.right{
    color: #333;
     font-size: 12px;
}

.comment-score,
.comment-text{
    margin-top: 12px;
}
.comment-time{
    color: #999;
}
.comment-name{
    font-size: 16px;
    margin: 22px 0 10px 0;
}
.comment-text{
    font-size: 14px;
}
.comment-img{
    width: 150px;
    height: 110px;
    border-radius: 3px;
    margin: 35px;
}
.comment-score::before{
    content: "综合评分：";
    margin-left: -70px;
}
.comment-score{
    width: 100px;
    height: 18px;
    margin-left: 70px;
    background-image: url("../../assets/yrimg/start-jingling.png")
}
.box{
    width: 100%;
    height: 190px;
    display: flex;
}
</style>