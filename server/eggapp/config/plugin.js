'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  //打开数据库
  mysql: {
  enable: true,
  package: 'egg-mysql'
   },

   //实现跨域
   cors:{
   enable: true,
   package: 'egg-cors',
   },
   
};
