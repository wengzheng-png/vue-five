'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //router.get('/homegoods', controller.home.homegoods);//首页的商品 默认50条

  router.get('/personinfo', controller.personr.personinfo);//个人中心 

  router.post('/longinrj', controller.personr.longinrj);//冉菁的测试接口
  
  router.post('/headpic', controller.personr.headpic);//头像

  router.post('/light', controller.personr.light);//头像
  
};
