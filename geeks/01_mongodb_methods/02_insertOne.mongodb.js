/*

### MongoDB insertOne() Method
insertOne() adds a single document to a collection.

- Inserts one document at a time.
- Supports text, numbers, arrays, etc.
- Returns the inserted document’s unique _id.

Syntax: db.collection_name.insertOne(<document>,{ writeConcern: <document>})

- collection_name: It refers to the name of the collection where the document will be inserted (the collection is created automatically if it does not exist).
- <document>: The document we want to insert. A document is a set of key-value pairs similar to a JSON object.
- writeConcern: If we need to specify a custom write concern (e.g., to ensure the data is written to multiple nodes), you can include this option.

Note: Rest same as insert()
*/

use("gfg");

// Insert a Document without Specifying an _id Field
db.students.insertOne({ Name: "Tim", Marks: 500 });

// Insert a Document Specifying an _id Field
db.students.insertOne({ _id: "Stu102", Name: "Ron", Marks: 220 });

// Handling Write Concern with insertOne()
db.students.insertOne({ Name: "Maria", Marks: 420 }, { writeConcern: { w: 1, j: true, wtimeout: 5000 } });