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
  password:'123456',
  database:'vuebase'
  }
  };
  config.cors = {
<<<<<<< HEAD
  origin: 'http://192.168.2.111:8080',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  credentials:true
=======
  // origin: 'http://localhost:8081',
  // origin: 'http://127.0.0.1:8081',
  // origin: 'http://192.168.50.199:8080',
  origin: 'http://192.168.2.165:8080',  //ws
  credentials: true
>>>>>>> da6ce5059984f3927cb6db86ed96d9480bb6a4ca
  };

  //开启文件模式
  config.multipart = {
  mode: 'file',
   };
<<<<<<< HEAD
   
   //关闭post的安全验证
  config.security = {
    csrf: {
      enable: false
    }
=======

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
>>>>>>> da6ce5059984f3927cb6db86ed96d9480bb6a4ca
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
