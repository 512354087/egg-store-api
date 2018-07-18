/* jshint indent: 2 */


module.exports = app => {  
  const DataTypes = app.Sequelize;
    const TAdmin = app.model.define('t_admin', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      phone: {
        type: DataTypes.CHAR(11),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(40),
        allowNull: true
      }
    },{
      timestamps: false,  //去除createAt updateAt
      freezeTableName: true,  // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
    });
    return TAdmin;
};


