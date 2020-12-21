'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async homegoods() {
    const { ctx } = this;
    var re = await this.ctx.service.handle.findgoods()
    this.ctx.body={code:2000,date:re}
  }

  async register() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async login() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async car() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async addgoodstocar() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  
  async userinfo() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
