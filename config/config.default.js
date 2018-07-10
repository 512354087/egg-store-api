'use strict';
const mysqlConfig=require('./mysql').mysql;

module.exports = appInfo => {
  const config = exports = {
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531202616671_2396';

  // add your config here
  config.middleware = [];

  //add mysql
  config.mysql=mysqlConfig;

  return config;
};


