'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/homegoods', controller.home.homegoods);//首页的商品 默认50条
 
};
