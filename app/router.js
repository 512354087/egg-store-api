'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const token = app.middleware.token();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/api/user',controller.user);
  app.get('/api/admin',token, controller.admin.index); 

};
