'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  
 

  //用户信息
  async personinfo() {
    const { ctx } = this;
    if (!this.ctx.session.userid){
      ctx.body={code:4003,info:"未登录"}
    }
    else{
    let userid = this.ctx.session.userid;
    let res = await this.ctx.service.personr.personinfo(userid);
    let res1 = await this.ctx.service.personr.personinfo1(userid,this.ctx.session.headimg);
    ctx.body={code:2003,info:"已经登录",res,res1}
  }
};

//headpic 头像
async headpic() {
  const { ctx } = this;
  console.log(this.ctx.request.body,123);
  var userid = this.ctx.session.userid;
  var res1 = await this.ctx.service.personr.headpic(this.ctx.request.body,userid);
  if(!this.ctx.request.files){
    ctx.body = {code:4001,info:"请选择图片"};
    console.log(11231);
  }
  if(this.ctx.request.files){
  this.ctx.session.headimg = this.ctx.request.files
  var res2 = await this.ctx.service.personr.headpic1(this.ctx.request.files,userid);
  ctx.body = {code:2001,info:"成功获取头像",res1,res2};
  }
 
};
async light() {
  const { ctx } = this;
}

}
module.exports = HomeController;