'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // router.get('/homegoods', controller.home.homegoods);//首页的商品 默认50条

  router.get('/note', controller.wzhome.note)//游记的展示

  router.get('/showask', controller.wzhome.showask)//游记详情的请求
 
};
