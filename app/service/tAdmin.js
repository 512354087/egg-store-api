const Service = require('egg').Service;
class TAdminService extends Service {
    async index() {
        const list =  this.ctx.model.TAdmin.findAll();
        return list;
    }
    async getUser(username,passward){
        const user=await this.authenticate(username,passward);
        return  user;
    }
    async authenticate(username,passward){
        let user = await this.ctx.model.TAdmin.findAll({
            where: {username},
            attributes: {exclude: ['password']}
        });
        return user;
    }
}

module.exports = TAdminService;