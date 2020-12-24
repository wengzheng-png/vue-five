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
  origin: 'http://192.168.2.111:8080',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
=======
  origin: 'http://192.168.2.113:8080',
  // origin: 'http://192.168.50.199:8080',
  credentials: true
>>>>>>> 1c4c541c69a607c46c15e463f5c05e9fd6e0ac53
  };

  //开启文件模式
  config.multipart = {
  mode: 'file',
   };
   
   //关闭post的安全验证
  config.security = {
    csrf: {
      enable: false
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
