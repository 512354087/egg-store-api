/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_cate', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cate_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    thumLogo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'product_cate'
  });
};
