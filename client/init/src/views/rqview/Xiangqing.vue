<template>
    <div class="bigbox">
<div class="box">
    <div class="box1">
        <img :src="require('../../../public/lightimg/'+img+'.jpg')" alt="" ref="img" class="img1">
		<ul class="ulbox">
			<li >
			<li><img :src="require('../../../public/lightimg/' + img1 +'.jpg')" alt="" @click="click1" ref="img1" class="img0"></li>
			<li><img :src="require('../../../public/lightimg/' + img2 +'.jpg')" alt="" @click="click2" ref="img2" class="img0"></li>
			<li><img :src="require('../../../public/lightimg/' + img3 +'.jpg')" alt="" @click="click3" ref="img3" class="img0"></li>
		</ul></div>
    <div class="boxcont">
		<span class="jiuti">九寨沟风景区</span><span class="tidian">电询</span>
		<span class="dizhi">景点地址：</span><span class="condizhi">四川省西北部岷山山脉南段的阿坝藏族羌族自治州九寨沟县漳扎镇境内</span>
		<span class="time">开放时间：</span><span class="timecont">每日8:00--18:00</span>
		<p class="pmiaosu">九寨沟因为最初有九个藏族村寨而得名，最早的历史可以追溯到5000年前，与中华文明同步。</p>
	</div>
	<div class="jieshao">
		<p class="pjie">景点介绍</p>
		<p class="conp1">
			九寨沟位于四川省西北部岷山山脉南段的阿坝藏族羌族自治州九寨沟县漳扎镇境内，系张江水系嘉陵江上游白水江源头
的一条大支沟,流域面积651 34km,因沟内有树正、荷叶、则查洼等九个藏族村寨而得名。九寨沟年均气温6-14°C
度，冬无严寒，夏季凉爽，四季色各异:仲春树绿花艳，盛夏幽湖翠山，金秋尽染山林，隆冬冰塑自然。以翠湖、叠
瀑、彩林、雪峰、藏情、蓝冰“六绝”著称于世。

		</p>
		<p class="conp2">
			九寨沟四周群山耸峙，有雪峰数十座,高插云霄，终年白雪皑皑。河谷地带奇水荟萃,间有成梯形分布的大小湖泊11
4个，瀑布群17个,钙华滩流5处,泉水47眼，湍流11段, 以1870米的海拨高差，在12座雪峰之间穿林跨谷,珠连玉
接, Y字型串珠，透迤近60公里，形成了罕见的以高山湖泊群和瀑布群以及钙华滩流为主体的风景名胜区。湖泊小者
数平方米，最大的长海长达7公里。湖水终年碧蓝澄澈，色彩斑谰，在阳光照射下，呈现出蓝、黄、橙、绿等多种色
彩，绚丽夺目。天气晴朗时，蓝天、云、山森林倒映湖中，水光浮翠，美丽如画，并随季节推移呈现出不同的色
彩和风韵，有“九寨归来不看水”之说。

		</p>
		<p class="conp3">
			九寨沟里九个古老的藏族村寨、石磨房、栈道、经幡和藏羌歌舞等 ，藏族特色浓郁而神秘，又构成了九寨沟独特的旅游
文化。九寨沟的动植物资源十分丰富，在300平方公里的原始森林中，自然分布的原生物种有3553种,有白垩纪末、第
三世纪初的子遗植物独叶草、星叶草、 箭竹等。 原始森林也是众多动物繁衍生息的适宜环境，初步调查有无脊椎动物69
3种、脊椎动物313种，珍稀动物有大熊猫、金丝猴、小熊猫、羚羊等。九寨沟集原始美、自然美、野趣美为一-体,具有
极高的游览观赏价值和科普价值，被誉为“"人间仙境”、” 童话世界”。九寨沟作为一个世界罕见的地质地貌带和生物
多样性地区，具有无可替代的生态意义和科学研究价值。

		</p>
	</div>
</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img:"jiu",
                img1:"jiu",
                img2:"jiuzai",
                img3:"qiu"
            }
        },
        methods: {
            click1(){  
            this.$refs.img.src = this.$refs.img1.src;
            },click2(){  
            this.$refs.img.src = this.$refs.img2.src;
            },click3(){  
            this.$refs.img.src = this.$refs.img3.src;
            }
        },
    }
</script>

<style lang="scss" scoped>
* {
				margin: 0;
				padding: 0;
			}

			.bigbox {
				background-color: rgba(180, 172, 172, 0.24);

			}

			.box {
				background-color: #fff;
			}
			
			.showImg {
				width: 600px;
				height: 400px;
				display: block;
				margin: 20px auto 0;
			}

			li {
				list-style: none;
				display: inline-block;
			}

			.box{
				position: relative;
				height: 850px;
				width: 1200px;
				margin: auto;
				position: relative;
				box-sizing: border-box;
				padding-top: 50px;
			}
			
			.img1{
				width: 550px;
				height:280px;
			}

			.img0{
				display: inline-block;
				padding: 5px 15px;
				width: 150px;
				height: 90px;
			}

			.ulbox{
				width: 550px;
				border: solid 3px #ccc;
				border-radius: 20px;
			}

			.boxcont {
				position: absolute;
				width: 580px;
				height: 400px;
				background-color: #fff;
				right: 0;
				top: 50px;
			}

			.jiuti {
				position: relative;
				font-size: 30px;
				top: 30px;
				left: 30px;
			}

			.tidian{
				position: absolute;
				font-size: 24px;
				top: 25px;
				right:5px;
				background-color: rgba(243, 123, 26, 0.719);
				width: 120px;
				height: 50px;
				text-align: center;
				line-height: 50px;
				color: #fff;
				border-top-left-radius:30px ;
				border-bottom-right-radius: 30px;
			}

			.dizhi,.condizhi{
				position: absolute;
				top: 120px;
			}
			.time,.timecont{
				position: absolute;
				top: 180px;
			}
			.pmiaosu{
				position: absolute;
				top: 230px;
			}

			.dizhi,.time,.pmiaosu{
				left: 30px;
			}

			.pmiaosu{
				width: 500px;
			}

			.condizhi,.timecont{
				left: 120px;
				width: 400px;
			}

			.box1{
				position: relative;
				left: 30px;
			}

			.jieshao {
				margin-top: 50px;
				width: 1200px;
				background-color: #fff;
				height: 320px;
			}

			.conp1,.conp2,.conp3{
				padding: 10px 20px;
				width: 1100px;
				margin: auto;
			}

			.pjie{
				position: relative;
				height: 50px;
				width: 1100px;
				line-height: 50px;
				margin: auto;
				box-sizing: border-box;
				padding-left: 30px;
				font-size: 18px;
				background-color: rgba(202, 196, 196, 0.253);
			}

			
</style>