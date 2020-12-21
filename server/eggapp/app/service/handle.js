const Service = require('egg').Service;
class Service2 extends Service {

async findgoods(uid) {
const sql=`select * from goods`
const data = await this.app.mysql.query(sql);
return data;
  }
}

module.exports = Service2;