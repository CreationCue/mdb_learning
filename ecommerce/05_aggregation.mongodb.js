use("ecommerce");

db.sales.aggregate([
    { $match: { category: "Fruit" } },
    { $project: { _id: 0, item: 1, price: 1, quantity: 1 } },
]);

db.sales.aggregate([
    {
        $group: {
            _id: "$category",
            totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
    },
    { $sort: { totalSales: -1 } }
]);

