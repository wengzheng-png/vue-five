'use strict';
//后端  接收service发送过来的数据    业务代码  返回数据给前端  
const Controller = require('egg').Controller;
const fs = require("fs")
class HomeController extends Controller {
  //前五条是商品
  async goods1() {
    const { ctx } = this;
    //默认查询5条数据
    var count = 5
      ctx.body = await this.ctx.service.home.goods1(count);
  }
 
}

module.exports = HomeController;


