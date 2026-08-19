use("ecommerce");
db.dropDatabase();

let doc = db.products.findOne({ category: "Electronics" });
if (doc) {
    delete doc._id;
    doc.createdAt = new Date();
    doc.name = doc.name + " Copy";
    db.products.insertOne(doc);
}

db.products.deleteOne({ name: "Wireless Mouse Copy" });
db.products.deleteMany({ name: "Wireless Mouse Copy" });
db.products.find();