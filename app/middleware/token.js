

module.exports = options => {
    return async function token(ctx, next) {
        console.log(ctx.request.header['token']);
        if (ctx.request.header['token']) {
            let user =await this.ctx.app.mysql.query('select token,id from t_admin where token = ? ',[ctx.request.header['token']]) 
            if(user){
                await next();
            }
            
        } else {
            ctx.body = {
                status: 401,
                data: {
                    msg: 'token失效'
                }
            }
        }
    };
};
