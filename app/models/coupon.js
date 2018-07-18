/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coupon', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    created_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'coupon'
  });
};
