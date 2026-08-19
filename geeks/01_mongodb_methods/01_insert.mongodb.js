/*

### MongoDB - Insert() Method (deprecated in mongosh)

The insert() method in MongoDB is used to add one or more documents to a collection, automatically generating a unique _id when not provided, though it is now deprecated in favor of newer methods.

1. Adds single or multiple documents to a collection.
2. Automatically generates a unique _id if not specified.
3. User-provided _id values must be unique.
4. Supports usage within multi-document transactions.
5. Deprecated in the MongoDB shell (mongosh).
6. Recommended alternatives are insertOne() or insertMany().

Syntax:

db.Collection_name.insert(
<document or [document1, document2,...]>,
{
    writeConcern: <document>,
    ordered: <boolean>
})


## Parameters

1. document: A document or array of documents to insert into the collection. Documents are a structure created of file and value pairs, similar to JSON objects.
2. optional: The second parameter is optional which includes writeConcern and ordered.


## Optional parameters

1. writeConcern: It is only used when you do not want to use the default write concern. The type of this parameter is a document.
2. ordered: The default is true which inserts documents in order while false allows unordered insertion.

## Behaviors of Insert() Method
The insert method in MongoDB is used to add documents to a collection. Here’s how it behaves based on the aspects of Write Concern, Create Collection and the _id field:

1. Write Concern
Write concern defines how MongoDB acknowledges write operations, using options like w (write) and j (journal) to control data durability.

Default Write Concern: If not specified, MongoDB uses the default write concern, which is to acknowledge the write operation after it has been written to the primary node.
Configurable Write Concern: You can specify the write concern as an option to the insert method.

For example: db.collection.insert(document, { writeConcern: { w: 1, j: true } })

w: 1 means the operation will be acknowledged only after the primary node confirms the write.
j: true means the write operation will be acknowledged only after the write has been committed to the journal.

2. Create Collection
In MongoDB, collections are created implicitly when a document is inserted into a non-existent collection.

a. Implicit Collection Creation: If the specified collection does not exist, MongoDB will create it implicitly when the first document is inserted.

Example: 
db.newCollection.insert({ name: "Alex", age: 25 })

b. Explicit Collection Creation: While not common, we can also create a collection explicitly using the createCollection method before inserting documents.

Example: 
db.createCollection("explicitCollection")
db.explicitCollection.insert({ name: "Luca", age: 30 })

3. _id Field
The _id field is MongoDB’s primary key, must be unique, is auto-generated if omitted, and custom duplicate values cause errors.

==========================

1. writeConcern (Document)
Defines the level of acknowledgment requested from MongoDB for the write operation. It determines how safe you want the write to be before MongoDB returns a success response.

w (Write Acknowledgment): Specifies the number of instances that must acknowledge the write.

w: 1 (Default): Requests acknowledgment from the primary node only.

w: 0: Disables write acknowledgment (fire-and-forget). Fast, but you won't know if the write failed.

w: "majority": Requires acknowledgment from a majority of the replica set nodes. Highly secure against data loss.

j (Journal Acknowledgment): A boolean (true/false). Requests acknowledgment that MongoDB has written the operation to the on-disk journal before returning success.

wtimeout (Timeout): Time limit in milliseconds to prevent write operations from blocking indefinitely if replica set nodes are unreachable.

Example: Require majority acknowledgment and on-disk journaling within 5 seconds

db.users.insert(
  { name: "Alice" },
  { writeConcern: { w: "majority", j: true, wtimeout: 5000 } }
)

2. ordered (Boolean)
Determines how MongoDB handles array insertions ([doc1, doc2, ...]) when an error occurs mid-process.

ordered: true (Default): MongoDB inserts the documents sequentially. If an error occurs (e.g., duplicate key error on doc2), MongoDB halts immediately and does not process any remaining documents (doc3, doc4, etc.).

ordered: false (Unordered): MongoDB attempts to insert all documents, potentially in parallel or out of order. If an error occurs on one document, MongoDB continues inserting the remaining documents in the array and reports all errors at the end.

Example: Continue inserting remaining documents even if one fails

db.users.insert(
  [{ _id: 1, name: "Alice" }, { _id: 1, name: "Duplicate" }, { _id: 2, name: "Bob" }],
  { ordered: false }
)

Note: db.collection.insert() is largely legacy syntax. In modern applications and scripts, it is best practice to use insertOne() or insertMany(), where ordered is an option specific to insertMany().



*/

use("gfg");

db.users.insert(
  { name: "Alice" },
  { writeConcern: { w: "majority", j: true, wtimeout: 5000 } }
);

db.users.insert([
  { _id: 1, name: "Alice" },
  { _id: 1, name: "Duplicate" },
  { _id: 2, name: "Bob" }],
  { ordered: false }
);

db.students.insert({ name: "Lee", marks: 500 });

db.student.insert([
  { Name: "Ben", Marks: 550 },
  { Name: "Nicol", Marks: 430 },
  { Name: "Denis", Marks: 499 }]);
