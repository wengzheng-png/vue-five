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

 /*  config.security = {
    domainWhiteList:['.http://192.168.2.17:8080'],  // 安全白名单，以 . 开头
  }; */
  
  //允许跨域
  config.cors = {
  origin: 'http://192.168.2.17:8080',
  credentials:true
  //allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  //允许上传文件
  config.multipart = {
  mode: 'file',
   };

   //关闭csrf 关闭安全验证
  config.security={
    csrf:{
      enable:false
    }
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
