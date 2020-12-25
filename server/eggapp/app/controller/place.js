'use strict';
const Controller = require('egg').Controller;
class PlaceController extends Controller {
 
  // 目的地显示热门地点
  async place() {
    const { ctx } = this;
    // 查询从第3开始返回8条数据
    const sql=`select * from place limit 2,8;`
    const data = await this.app.mysql.query(sql);
    this.ctx.body = data;
  }


  // 搜索框请求
  async search() {
    const { ctx } = this;
    // 查询从第3开始返回8条数据
    var keyword = this.ctx.request.query.keyword;
    const sql=`select * from place WHERE name LIKE '%${keyword}%'`
    const data = await this.app.mysql.query(sql);
    this.ctx.body = data;
  }
}
module.exports = PlaceController;