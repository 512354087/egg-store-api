module.exports = app => {  
    class Model {
      constructor(ctx) {}
      async getClient(clientId, clientSecret) {
        try {
         
          return {
            id: 1,
            redirectUris: '1',
            grants: 1
          }
        } catch (err) {
          return false
        }
      }
      async getUser(username, password) {
        try {
          console.log('getUser invoked.......')
          const user = await this.ctx.service.TAdmin.getUser(username, password)
          return user
        } catch (err) {
          return false
        }
      }
      async getAccessToken(bearerToken) {
         try {
            return 'token';
          } catch (err) {
            return false
          }
      }
      async saveToken(token, client, user) {
         return _token;
      }
      async revokeToken(token) {}
      async getAuthorizationCode(authorizationCode) {}
      async saveAuthorizationCode(code, client, user) {}
      async revokeAuthorizationCode(code) {}
    }  
    return Model;
  };