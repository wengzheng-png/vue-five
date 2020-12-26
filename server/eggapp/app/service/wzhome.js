const Service = require('egg').Service;
class wzService extends Service {
async findnote(uid) {
 if(uid==1){
  const sql=`select * from place2 limit 0,3`
  const data = await this.app.mysql.query(sql);
  return data;
 }else if(uid==2){
  const sql=`select * from place2 limit 3,3`
  const data = await this.app.mysql.query(sql);
  return data;
 }
 else if(uid==3){
  const sql=`select * from place2 where pid = 7`
  const data = await this.app.mysql.query(sql);
  return data;
 }
 else if(!uid){
  const sql=`select * from place2 limit 0,3`
  const data = await this.app.mysql.query(sql);
  return data;
 }
}
// 前端游记详情页的请求
async showask(uid) {

     const sql=`select * from place2 where pid = ${uid}`
     const data = await this.app.mysql.query(sql);
     return data;

}

async askpic(uid) {

     const sql=`select * from wzpic`
     const data = await this.app.mysql.query(sql);
     return data;

}


async getpic(uid) {

     const sql=`select * from wzpic where wid = ${uid}`
     const data = await this.app.mysql.query(sql);
     return data;

}


}
module.exports = wzService;