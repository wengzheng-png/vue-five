<template>
    <div>
        <h1>旅游地点简介</h1>
        <!-- 这个页面怎样根据对应的商品id跳转到详情页 -->
        <div class="toplace">
            <div class="placeimg">
                <img :src="toimg" alt="图片加载失败">
            </div>
            <div class="placetext">
                <h3>{{toname}}</h3>
                <p>{{totext}}</p>
            </div>
        </div>

        <div class="toplace">
            <div class="left">周边目的地</div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{ 
                toname:"",
                toimg:"",
                totext:""

            }
        },
        mounted(){
            var name = localStorage.getItem("name")
            var img = localStorage.getItem("img")
            var text = localStorage.getItem("text")
            console.log(name,img,text);
            this.toname = name;
            this.toimg = img;
            this.totext = text;
        }

        
    }
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}
.toplace {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.placeimg {
    width: 530px;
    height: 400px;
    background-color: pink;
    overflow: hidden;
}
.placeimg img {
    width: 530px;
    height: 400px;
    /* background-color: pink; */
}
.placetext {
    width: 650px;
    height: 400px;
    background-color: #ccc;
}


/* 周边目的地 */
.left {
    width: 200px;
    height: 200px;
}
.right {
    width: 700px;
    height: 200px;
    background-color: #ccc;
}
</style>