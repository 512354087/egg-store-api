/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_address', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    province_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    county_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    town_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
      allowNull: true
    },
    address_detail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receipt_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receipt_phone: {
      type: DataTypes.CHAR(11),
      allowNull: true
    }
  }, {
    tableName: 'user_address'
  });
};
