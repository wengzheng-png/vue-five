'use strict';

const Controller = require('egg').Controller;
const fs = require("fs")
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

  async redir() {
    const { ctx } = this;
    // console.log(this.ctx.query.aid);
    // let re= await this.ctx.service.wzhome.showask(this.ctx.query.aid)
    // ctx.body = 'hi, egg';
    var re =await fs.readFileSync(__dirname+"/../public/index.html")
    this.ctx.set({"Content-Type" : 'text/html'})
    ctx.body = re;
  }

  
  async askpic() {
    const { ctx } = this;
    // console.log(this.ctx.query.aid);
    let re= await this.ctx.service.wzhome.askpic(this.ctx.query)
    // ctx.body = 'hi, egg';
    ctx.body = re;
  }

  async getpic() {
    const { ctx } = this;
    // console.log(this.ctx.query.aid);
    let re= await this.ctx.service.wzhome.getpic(this.ctx.query.aid)
    // ctx.body = 'hi, egg';
    ctx.body = re;
  }
}

module.exports = HomeController;
