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

 /*  config.security = {
    domainWhiteList:['.http://192.168.2.17:8080'],  // 安全白名单，以 . 开头
  }; */
  
  //允许跨域
  config.cors = {
<<<<<<< HEAD
  origin: 'http://192.168.43.30:8080',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  credentials:true
  // origin: 'http://localhost:8081',
  // origin: 'http://192.168.50.199:8080',
  // origin: 'http://192.168.2.165:8080',  //ws
=======
  origin: 'http://192.168.43.62:8081',
  //credentials:true
  //allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // origin: 'http://localhost:8081',
  // origin: 'http://192.168.50.199:8080',
  //origin: 'http://192.168.2.165:8080',  //ws

  //origin: 'http://192.168.43.30:8080',

  // origin: 'http://192.168.2.113:8081',
  //origin: 'http://192.168.50.199:8080',

  // origin: 'http://localhost:8081',
  // origin: 'http://192.168.50.199:8080',
  // origin: 'http://192.168.2.165:8080', 
  credentials: true
>>>>>>> deca12b58da8603b00384d5749f35ecf3f16881a
  };

  //允许上传文件
  config.multipart = {
  mode: 'file',
   };
<<<<<<< HEAD
   
   //关闭post的安全验证
  config.security = {
    csrf: {
      enable: false
    }
  }
=======

  
>>>>>>> deca12b58da8603b00384d5749f35ecf3f16881a
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

  return {
    ...config,
    ...userConfig,
  };
};
