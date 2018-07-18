/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shopping_cart', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stock_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'shopping_cart'
  });
};
