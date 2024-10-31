db.getCollection('drives').aggregate(
  [
    {
      $lookup: {
        from: 'users',
        localField: 'idOfStudentsAttended',
        foreignField: 'id',
        as: 'AttendedStudents'
      }
    },
    {
      $project: {
        _id: 0,
        companyName: 1,
        driveDate: 1,
        attendedStudentNames: {
          $map: {
            input: '$AttendedStudents',
            as: 'student',
            in: '$$student.name'
          }
        }
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);