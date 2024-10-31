db.getCollection('mentors').aggregate(
  [
    {
      $addFields: {
        menteeCountActual: { $size: '$menteeIds' }
      }
    },
    {
      $match: { menteeCountActual: { $gt: 15 } }
    },
    {
      $project: {
        _id: 0,
        mentorName: 1,
        menteeCountActual: 1
      }
    }
  ]);