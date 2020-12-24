//控制层
//写后端  发送数据 给  controller 

var Service = require('egg').Service;

class HomeServiceService extends Service {
  //首页商品接口
  /* 活动 */
  async goods1() {
    //查询语句  记得去配置sql
    const sql = `select * from homegoods limit 0,50`;
    var data = await this.app.mysql.query(sql);
    return data;
  }
  /* 攻略 */
  async goods2() {
    //查询语句  记得去配置sql
    const sql = `select * from place2 limit 0,50`;
    var data = await this.app.mysql.query(sql);
    return data;
  }
  /* 酒店 */
  async hotel() {
    //查询语句  记得去配置sql
    const sql = `select * from hotel limit 0,50`;
    var data = await this.app.mysql.query(sql);
    return data;
  }
   /* 酒店 */
   async piao() {
    //查询语句  记得去配置sql
    const sql = `select * from menpiao limit 0,50`;
    var data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = HomeServiceService;