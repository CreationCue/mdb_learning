/*

### MongoDB insertMany() Method
insertMany() inserts multiple documents in one operation, improving performance and efficiency.

- Adds many documents at once.
- Can be more efficient than single inserts depending on batch size, network conditions, and workload.
- Efficient for large datasets.

Syntax: db.collection_name.insertMany([<document 1>, <document 2>, ...],{writeConcern: <document>,ordered: <boolean>})

- <document1>, <document2>, … : Array of documents to insert.
- writeConcern (optional): Overrides the default write concern.
- ordered (optional): true inserts in order (default); set false for unordered inserts.

# Error Handling
During bulk operations like insertMany(), MongoDB may throw a BulkWriteError (e.g., due to duplicate _id values), which can be handled using a try–catch block in application code.

1. Duplicate Key Errors: Ensure no duplicates in unique indexed fields, and use { ordered: false } to continue inserting remaining documents despite errors.
2. Validation Errors: Ensure all documents meet schema validation rules.
3. Network Issues: Implement retry logic to handle transient network errors.
4. Error Handling: Examine error details to understand and address specific issues.

*/

use("gfg");

// Insert Multiple Documents in a Single Operation without Specifying an _id field
// db.students.insertMany([{ name: "Ryan", age: 20 }, { name: "Ron", age: 24 }, { name: "Kim", age: 26 }]);

// Insert Several Documents Specifying an _id Field
// db.student.insertMany([{ _id: "stu200", name: "Luca", age: 20 }, { _id: "stu201", name: "Tim", age: 24 }]);

// BulkWriteError Handling
let docs = [
    { name: "Ray", age: 20 },
    { name: "Rex", age: 24 },
    { name: "Jay", age: 26 },
    { name: "Jay", name: 26 },
    { _id: "stu205", name: "Leo", age: 20 },
    { _id: "stu205", name: "Tin", age: 23 },
    { _id: "stu206", name: 555, age: 27 },
    { _id: "stu207", name: "Tom", age: 21 },
];

db.students.insertMany(docs, { ordered: false })
    .then(result => console.log(result))
    .catch(error => {
        console.log('error :', error);

        if (error.name === "BulkWriteError") {
            error.writeErrors.forEach(writeError => {
                console.error("Document index:", writeError.index);
                console.error("Error message:", writeError.errmsg);
            });
        } else {
            console.error("Unexpected error:", error);
        }
    });