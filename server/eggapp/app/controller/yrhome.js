'use strict';
//编写控制器
// 后端 注册接口  数据接口  
const Controller = require('egg').Controller;
const svg = require("svg-captcha")
class HomeController extends Controller {

	// 主题游商品信息
	async goodsitems() {
		const { ctx } = this;
		//   查询数据库是否有数据
		var re = await this.ctx.service.yrhome.isgoodsitems(this.ctx.request.query)
		if (re[0]) {
			//   ctx.body={
			// 	  code:2001,
			// 	  info:"有数据"
			//   }
			this.ctx.body = re
		} else {
			ctx.body = {
				code: 4001,
				info: "没有数据"
			}
		}
	}
	// 验证码
	async getVerif() {
		var verif = svg.create({
			size: 4,
			fontSize: 30,
			width: 86,
			height: 40,
			background: '#bbb',
			color: true,
		});
		//   console.log(verif);
		//缓存验证码文字
		this.ctx.session.verif = verif.text
		// console.log(this.ctx.session.verif,22222222);
		this.ctx.body = verif.data
	}
	// 订单查询
	async orderQuery() {
		// console.log(this.ctx.request.body);
		// console.log(this.ctx.session.verif,11111111111);
		if (this.ctx.request.body.verif == this.ctx.session.verif) {
			var re = await this.ctx.service.yrhome.order(this.ctx.request.body)
			if (!re[0]) {
				this.ctx.body = { code: 4003, info: "订单不存在" }
			} else {
				this.ctx.session.phone = this.ctx.request.body.phone
				var tel = this.ctx.session.phone
				this.ctx.body = { phone: tel, code: 2002, info: "有订单" }
			}
		} else {
			this.ctx.body = { code: 4002, info: "验证码错误" }
		}
	}
	// 我的订单
	async myorder() {
		const { ctx } = this;
		console.log(this.ctx.session.phone);
		var re = await this.ctx.service.yrhome.myorder(this.ctx.session.phone)
		ctx.body = re
	}
}

module.exports = HomeController;
