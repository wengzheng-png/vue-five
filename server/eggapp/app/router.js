'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/goods1', controller.home.goods1);//首页的商品 默认50条
 
  router.get('/goodsitems', controller.yrhome.goodsitems);//主题游商品
	router.get('/getVerif', controller.yrhome.getVerif);//验证码
	router.post('/orderquery', controller.yrhome.orderQuery);//订单查询
	router.post('/myorder', controller.yrhome.myorder);//我的订单
};
