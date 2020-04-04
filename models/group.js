module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
      group_name: DataTypes.STRING,
      admin_id: DataTypes.INTEGER
    });
    return Group;
  };
  