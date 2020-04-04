module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
      product_owner: DataTypes.INTEGER,
      product_name: DataTypes.STRING,
      product_category: DataTypes.STRING,
      product_description: DataTypes.STRING,
      quantity_in_stock: DataTypes.STRING,
    });
    return Inventory;
  };
  