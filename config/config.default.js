'use strict';
const mysqlConfig=require('./mysql').mysql;

module.exports = appInfo => {
  const config = exports = {
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531202616671_2396';

  // add your config here
  config.middleware = ['token'];
  

  //add mysql
  config.mysql=mysqlConfig;

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'store',
    host: '118.31.11.26',
    port: '3306',
    username: 'root',
    password: '123456'
  };

    config.oAuth2Server={
      debug: config.env === 'local',
      grants: [ 'password' ]
   };


    //关闭csrf
    config.security = {
      csrf: {
        enable: false
      } //关闭csrf
    };
  
    config.cors = {
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };

  return config;
};


