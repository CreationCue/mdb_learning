use("ecommerce");

db.products.updateOne({ name: "Wireless Mouse" }, { $set: { price: 899 } });
db.products.updateMany({ category: "Electronics" }, { $inc: { stock: 10 } }); // Incrementing stock by 10 for all products in Electronics category
// Using $push and $pop to add and remove tags from a product
db.products.updateOne({ name: "Wireless Mouse" }, { $push: { tags: { $each: ["earbuds", "mouse"] } } }); // Using $each to add multiple tags at once
db.products.updateOne({ name: "Wireless Mouse" }, { $addToSet: { tags: { $each: ["earbuds", "mouse"] } } }); // Add tags only if they don't already exist
db.products.updateOne({ name: "Wireless Mouse" }, { $pull: { tags: "mouse" } }); // Using $pull to remove tags
db.products.updateOne({ name: "Wireless Mouse" }, { $pullAll: { tags: ["earbuds", "mouse"] } }); // Using $pullAll to remove multiple tags at once
db.products.find();