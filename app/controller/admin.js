const Controller = require('egg').Controller;
class AdminController extends Controller {
    async token() {
      this.ctx.body = 1;
    }
    async index(){
      const list= await this.service.tAdmin.getUser('admin','admin');
      this.ctx.body = list;
    }
}
module.exports = AdminController; 