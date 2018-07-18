/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_stock', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    size_id: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    color_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'product_stock'
  });
};
