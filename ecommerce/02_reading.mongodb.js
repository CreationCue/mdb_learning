use("ecommerce");

db.products.find();
db.products.find().pretty();
db.products.find({ category: "Computers" });
db.products.find({ tags: "keyboard" });
db.products.find(ObjectId('6a7d66f2ca8e717427649d0b'));
// Comparison Operators
db.products.find({ price: { $gt: 1000 } }); // grater then
db.products.find({ price: { $gte: 1000, $lte: 5000 } }); // grater/less then equal to
// Logical Operators
db.products.find({ $or: [{ category: "Computers" }, { stock: { $lt: 50 } }, { ratings: { $gt: 4.6 } }] });
// Projection (Select specific fields) (1 = include, 0 = exclude)
db.products.find({}, { name: 1, price: 1, tags: 1, _id: 0 });
// Soting (1 = ascending, -1 = descending), Skipping (number of documents to skip) and Limiting (number of documents to return)
db.products.find().sort({ price: -1 }).skip(1).limit(2); // skip first document and return next 2 documents
