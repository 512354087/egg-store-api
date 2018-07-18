const Service = require('egg').Service;
class UserService extends Service {
    async index() {
        const list =  this.ctx.model.Users.findAll();
        return list;
    }
  
}

module.exports = UserService;