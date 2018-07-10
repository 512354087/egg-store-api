'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const list=await this.ctx.app.mysql.query('select * from users');
    this.ctx.body = list;
  }
}

module.exports = HomeController;
