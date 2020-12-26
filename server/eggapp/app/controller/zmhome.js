'use strict';
//后端  接收service发送过来的数据    业务代码  返回数据给前端  
const Controller = require('egg').Controller;
const fs = require("fs")
class HomeController extends Controller {
  //前五条是商品
  /* 活动 */
  async goods1() {
    const {
      ctx
    } = this;
    //默认查询50条数据
    ctx.body = await this.ctx.service.zmhome.goods1();
  }
  /* 攻略 */
  async goods2() {
    const {
      ctx
    } = this;
    //默认查询50条数据
    ctx.body = await this.ctx.service.zmhome.goods2();
  }
  /* 酒店 */
  async hotel() {
    const {
      ctx
    } = this;
    //默认查询50条数据
    ctx.body = await this.ctx.service.zmhome.hotel();
  }
 /* 门票 */
 async piao() {
  const {
    ctx
  } = this;
  //默认查询50条数据
  ctx.body = await this.ctx.service.zmhome.piao();
}
}

module.exports = HomeController;