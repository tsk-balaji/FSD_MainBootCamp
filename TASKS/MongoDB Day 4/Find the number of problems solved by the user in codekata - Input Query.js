db.users.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      totalProblemsSolved: {
        $reduce: {
          input: { $objectToArray: "$noOfProblemsSolved" },
          initialValue: 0,
          in: { $add: ["$$value", "$$this.v"] }
        }
      }
    }
  }
]);