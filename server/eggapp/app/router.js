'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;




  router.get('/homegoods', controller.home.homegoods);//首页的商品 默认50条

  router.post('/register', controller.home.register);//注册的页面

  router.post('/login', controller.home.login);//登录的页面

  router.get('/car', controller.home.car);//用户购物车的接口

  router.get('/addgoodstocar', controller.home.addgoodstocar);//添加购物车接口

  router.get('/userinfo', controller.home.userinfo);//获得用户的信息

 
};
