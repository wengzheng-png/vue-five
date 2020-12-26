'use strict';
const Controller = require('egg').Controller;
const svgCaptcha = require('svg-captcha');
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello';
  }

  async register() {
    const { ctx } = this;
    // console.log(this.ctx.request.body.tel,111111111111111);
    var res = await this.ctx.service.user.isregister(this.ctx.request.body.tel)
    if(res[0]){
      this.ctx.body = {code:"4001",info:"电话号码已注册过！"}
    }else{
      await this.ctx.service.user.register(this.ctx.request.body)
      this.ctx.body = {code:"2001",info:"电话号码注册成功！"}
    }

  }
  async verif() {
    const { ctx } = this;
    var verif = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#ccc'
  });
    // 获取到验证码  进行缓存
    this.ctx.session.verif = verif.text;
    this.ctx.body = verif.data;
  }

  async login() {
    const { ctx } = this;
    // 登录页面收到后端发过来的数据之后
    // 进行判断验证码是否相同
    if(this.ctx.request.body.verif == this.ctx.session.verif){
     var res = await this.ctx.service.user.login(this.ctx.request.body)
     if(res[0]){
      //  登录成功的话  缓存用户账号，也可以缓存用户id  这里缓存的是用户账号
      this.ctx.session.tel = this.ctx.request.body.tel;
      this.ctx.session.userid = res[0].id;
      // console.log(this.ctx.session.tel,888888888);
      this.ctx.body = {code:"2003",info:"登录成功！"};
     }else {
      this.ctx.body = {code:"4003",info:"账号或者密码有错！"};
     } 
    }else{
      this.ctx.body = {code:"4002",info:"验证码输入错误！"};
    }
  }

  // 忘记密码
  async forgetpwd() {
    const { ctx } = this;
    console.log(this.ctx.request.body.tel,2222222222);
    // 修改密码  首先的去数据库中查看是否有此账号   有就去执行修改密码   没有就返回 不存在这个账号的标识给前段
    let res = await this.ctx.service.user.istel(this.ctx.request.body.tel)
    if(res[0]){
      // 账号存在  进行密码修改  密码是否修改没办法判断 因为修改密码的sql语句没有返回值
      let re = await this.ctx.service.user.forgetpwd(this.ctx.request.body);
      this.ctx.body = {code:"2004",info:"账号存在！可进行修改！修改成功"};

    }else {
      this.ctx.body = {code:"4004",info:"此账号不存在！"};
    }
    
  }

}
module.exports = UserController;