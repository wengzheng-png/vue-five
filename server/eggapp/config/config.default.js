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
  origin: 'http://localhost:8081',
  // origin: 'http://192.168.50.199:8080',
  credentials: true
  };
  config.multipart = {
  mode: 'file',
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
