//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020


db.getCollection('drives').aggregate(
  [
    {
      $match: {
        driveDate: {
          $gte: '2024-10-15',
          $lte: '2024-10-31'
        }
      }
    },
    {
      $project: {
        _id: 0,
        companyName: 1,
        driveDate: 1
      }
    }
  ]
);