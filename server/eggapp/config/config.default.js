/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.mysql={
  client:{
  host:'localhost',
  port:'3306',
  user:'root',
  password:'root',
  database:'vuebase'
  }
  };
  config.cors = {
<<<<<<< HEAD
  // origin: 'http://localhost:8081',
=======
  origin: 'http://127.0.0.1:8081',
>>>>>>> c4914cfe2b7dbb72e51d16f98c963705d4c942e6
  // origin: 'http://192.168.50.199:8080',
  origin: 'http://192.168.2.165:8080',  //ws
  credentials: true
  };
  config.multipart = {
  mode: 'file',
   };

   //关闭csrf
   config.security={
    csrf:{
      enable:false
    }
  }
// 缓存
  config.session = {
    key: 'HQYJ_SSION',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607422295884_4462';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.multipart = {
  mode: 'file',
   };

  return {
    ...config,
    ...userConfig,
  };
};
