module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
      product_owner: DataTypes.INTEGER,
      product_name: DataTypes.STRING,
      quantity_in_stock: DataTypes.STRING,
      group_id:DataTypes.INTEGER
    });
    return Product;
  };
  