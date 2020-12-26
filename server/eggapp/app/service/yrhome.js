var Service = require('egg').Service
const path = require("path")
const fs = require("fs")
class HomeService extends Service {
    // 是否有主题商品
    async isgoodsitems(){
        const sql = `select * from themegoods`;
        const data = await this.app.mysql.query(sql);
        return data;
    }
    // 是否有订单
    async order(arg){
        const sql = `select * from goodsorder where phone = "${arg.phone}"`;
        const data = await this.app.mysql.query(sql);
        return data;
    }
    // 订单详情
    async myorder(arg){
        const sql = `select * from goodsorder where phone="${arg}"`;
        const data = await this.app.mysql.query(sql);
        return data;
    }
}
module.exports = HomeService