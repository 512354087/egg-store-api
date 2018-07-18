/* jshint indent: 2 */


module.exports = app => {
  console.log(app);
  
  const { STRING, INTEGER,CHAR } = app.Sequelize;
    const Users = app.model.define('users', {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nickname: {
        type: STRING(255),
        allowNull: true
      },
      name: {
        type: STRING(255),
        allowNull: true
      },
      phone: {
        type: CHAR(11),
        allowNull: true
      },
      address: {
        type: STRING(255),
        allowNull: true
      },
      openid: {
        type: STRING(255),
        allowNull: true
      },
      token: {
        type: STRING(255),
        allowNull: true
      }
    },{
      timestamps: false,  //去除createAt updateAt
      freezeTableName: true,  // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
    });
   return Users;
};


