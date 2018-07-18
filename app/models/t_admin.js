/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_admin', {
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
  }, {
    tableName: 't_admin',
    

  });
};
