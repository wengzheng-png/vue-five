'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //router.get('/homegoods', controller.home.homegoods);//首页的商品 默认50条

  router.get('/personinfo', controller.personr.personinfo);//个人中心 
  
  router.post('/headpic', controller.personr.headpic);//头像

  router.post('/light', controller.personr.light);//头像
  
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

  //项目所需的接口
  router.get('/', controller.user.index);  //注册
  
  //项目所需的接口
  router.post('/register', controller.user.register);  //注册
  router.get('/verif', controller.user.verif);      //验证码
  router.post('/login', controller.user.login);   //登陆
  router.post('/forgetpwd', controller.user.forgetpwd);  //忘记密码
  router.get('/place', controller.place.place);   //目的地
  router.get('/search', controller.place.search);   //搜索去哪儿
 
  router.get('/goodsitems', controller.yrhome.goodsitems);//主题游商品
	router.get('/getVerif', controller.yrhome.getVerif);//验证码
	router.post('/orderquery', controller.yrhome.orderQuery);//订单查询
	router.post('/myorder', controller.yrhome.myorder);//我的订单
};
