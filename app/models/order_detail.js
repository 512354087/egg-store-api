/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
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
    num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    payable: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fact: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    order_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    stock_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'order_detail'
  });
};
