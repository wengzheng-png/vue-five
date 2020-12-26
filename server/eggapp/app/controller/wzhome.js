'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async note() {
    const { ctx } = this;
    console.log(this.ctx.query.uid);
    let re= await this.ctx.service.wzhome.findnote(this.ctx.query.uid)
    // ctx.body = 'hi, egg';
    ctx.body = re;
  }
  //  游记详情的请求
  async showask() {
    const { ctx } = this;
    // console.log(this.ctx.query.aid);
    let re= await this.ctx.service.wzhome.showask(this.ctx.query.aid)
    // ctx.body = 'hi, egg';
    ctx.body = re;
  }
}

module.exports = HomeController;
