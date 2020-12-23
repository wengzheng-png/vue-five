//控制层
//写后端  发送数据 给  controller 

var Service = require('egg').Service;

class HomeServiceService extends Service {
  //首页商品接口
  async goods1(count) {
    //查询语句  记得去配置sql
    const sql = 'select * from homegoods limit 0,5';
    var data = await this.app.mysql.query(sql);
    return data;
  }
  async useinfo() {
    return "66";
  }
}
module.exports = HomeServiceService;