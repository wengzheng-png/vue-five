<template>
    <div class="theme-text">
        <p>{{text}}</p>
      </div>
</template>

<script>
    export default {
        props:["text"]
    }
</script>

<style scoped>
.theme-text {
  width: 1000px;
  height: 128px;
  margin: 0 auto;
  border: 2px solid #fff;
  padding: 0 20px 20px 20px;
  margin-top: 20px;
}
.theme-text p {
  font-size: 14px;
  color: #fff;
  line-height: 48px;
  text-align: center;
}
</style>