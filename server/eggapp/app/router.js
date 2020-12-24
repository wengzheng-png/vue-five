'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
/* 活动 */
  router.get('/goods1', controller.zmhome.goods1);//活动模块的商品
  /* 游记 */
  router.get('/goods2', controller.zmhome.goods2);//游记模块的商品 
  /* 酒店 */
  router.get('/hotel', controller.zmhome.hotel);//酒店模块的商品 
  /* 门票 */
  router.get('/piao', controller.zmhome.piao);//门票模块的商品 
 
  router.get('/goodsitems', controller.yrhome.goodsitems);//主题游商品
	router.get('/getVerif', controller.yrhome.getVerif);//验证码
	router.post('/orderquery', controller.yrhome.orderQuery);//订单查询
	router.post('/myorder', controller.yrhome.myorder);//我的订单
};
