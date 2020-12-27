'use strict';
const Controller = require('egg').Controller;
class PlaceController extends Controller {
 
  // 目的地显示热门地点
  async place() {
    const { ctx } = this;
    // 查询从第3开始返回8条数据
    const sql=`select * from place limit 2,9;`
    const data = await this.app.mysql.query(sql);
    this.ctx.body = data;
  }


  // 去哪儿
  async search() {
    const { ctx } = this;
    var placeid = this.ctx.request.query;
    const sql=`select * from place WHERE id=${placeid.id}`
    const data = await this.app.mysql.query(sql);
    this.ctx.body = data;
  }

}
module.exports = PlaceController;