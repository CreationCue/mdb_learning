use("ecommerce");

db.products.createIndex({ stock: 1 });
db.products.getIndexes();
db.products.find({ stock: { $gt: 50 } });
db.products.dropIndex("stock_1");