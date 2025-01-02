```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs",
    },
  },
  {
    $unwind: "$relatedDocs",
  },
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: "$relatedDocs.someField",
      },
    }
  }
];

//Error is thrown if relatedDocs is empty
```