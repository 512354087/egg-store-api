/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_order', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_no: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    product_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: true,
      defaultValue: '101'
    },
    payable_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fact_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    discount_total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_address_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    address_detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 't_order'
  });
};
