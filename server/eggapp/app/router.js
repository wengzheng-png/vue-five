'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // router.get('/homegoods', controller.home.homegoods);//首页的商品 默认50条

  router.get('/note', controller.wzhome.note)//游记的展示

  router.get('/showask', controller.wzhome.showask)//游记详情的请求
/* 活动 */
  router.get('/goods1', controller.zmhome.goods1);//活动模块的商品
  /* 游记 */
  router.get('/goods2', controller.zmhome.goods2);//游记模块的商品 
  /* 酒店 */
  router.get('/hotel', controller.zmhome.hotel);//酒店模块的商品 
  /* 门票 */
  router.get('/piao', controller.zmhome.piao);//门票模块的商品 

  router.get('/askpic', controller.wzhome.askpic);//活动数据

  router.get('/getpic', controller.wzhome.getpic);//预定页面的请求数据

  router.get('/*', controller.wzhome.redir);//上线重定向
 
  
};
