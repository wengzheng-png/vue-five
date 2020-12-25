const Service = require('egg').Service;
const path = require("path")
const fs = require("fs")
class HomeService extends Service {
  
//登录
  async longinrj(obj) {
    //赋值
    //sql语句查询
    const sql=`SELECT * FROM user WHERE tel="${obj.tel}" and pwd="${obj.pwd}"`
    const data = await this.app.mysql.query(sql);
    console.log(data);
    return data;
  };

  async personinfo(userid) {
    //赋值
    //sql语句查询
    const sql=`SELECT * FROM user WHERE id="${userid}"`;
    const data = await this.app.mysql.query(sql);
    console.log(data,36253656);
    return data;
  };

  async personinfo1(userid,headimg) {
    //赋值
    //sql语句查询
    //const sql=`SELECT * FROM user WHERE id="${userid}"`;
    const sql1=`SELECT * FROM headpic WHERE userid="${userid}"`;
    //const data = await this.app.mysql.query(sql);
    const data1 = await this.app.mysql.query(sql1);
    //console.log(data1,123321);
    //return {data,data1};
    return data1;
  };
  
  async headpic(obj,userid) {
    //赋值
    //sql语句更新数据
    const sql=`UPDATE user SET nickname ="${obj.nickname}",label ="${obj.label}"   WHERE id="${userid}";`;
    const data = await this.app.mysql.query(sql);
    return data;
  };

  async headpic1(headpic,userid) {
    //赋值
    //sql语句查询
    let oldpath = headpic[0].filepath;

    //path.basename() 方法会返回 path 的最后一部分
    let txt = path.basename(oldpath)

    let newpath = __dirname + "/../public/headpic/" + txt;
    fs.renameSync(oldpath,newpath);
    //赋值
    let  headpic1 = "http://192.168.2.17:7001/public/headpic/" + txt;
    this.ctx.session.headimg = headpic1;
  console.log(this.ctx.session.headimg,666);
    //sql语句插入
    const sql=`INSERT  INTO headpic (userid,pic) VALUES (${userid}, "${headpic1}")`;
    const data = await this.app.mysql.query(sql);
    return {data,headpic1};
  };
}
module.exports = HomeService;