const Service = require('egg').Service;
const fs = require("fs")
const path = require("path")
class UserService extends Service {
  // 注册
  async isregister(tel) {
    const sql=`select * from myuser where tel="${tel}"`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  async register(obj) {
    const sql=`insert into myuser (tel,pwd,nickname,label) value ("${obj.tel}","${obj.pwd}","${obj.nickname}","${obj.label}")`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  // // 登陆
  // async login(obj) {
  //   const sql=`select * from myuser where tel="${obj.tel}"&&pwd="${obj.pwd}"`
  //   const data = await this.app.mysql.query(sql);
  //   return data;
  // }

  // // 修改密码  先判断有没有账号
  // async istel(tel) {
  //   const sql=`select * from myuser where tel="${tel}"`
  //   console.log(sql,11111);
  //   const data = await this.app.mysql.query(sql);
  //   console.log(data,999999999999999999);
  //   return data;
  // }
  // async forgetpwd(obj) {
  //   const sql=`update myuser set pwd="${obj.newpwd}" where tel="${obj.tel}"`
  //   const data = await this.app.mysql.query(sql);
  //   return data;
  // }

  

}
module.exports = UserService;