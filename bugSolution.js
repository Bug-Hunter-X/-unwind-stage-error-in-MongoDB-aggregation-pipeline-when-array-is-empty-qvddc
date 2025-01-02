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
    $addFields: {
      relatedDocs: {
        $ifNull: [ "$relatedDocs", [] ]
      }
    }
  },
  {
    $unwind: {
      path: "$relatedDocs",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: {
          $ifNull: [ "$relatedDocs.someField", null ]
        }
      }
    }
  }
];
```