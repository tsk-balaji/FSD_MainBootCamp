db.getCollection('attendance').aggregate(
  [
    {
      $match: {
        createdDate: {
          $gte: '2024-10-15',
          $lte: '2024-10-31'
        }
      }
    },
    {
      $lookup: {
        from: 'users',
        pipeline: [{ $project: { id: 1 } }],
        as: 'allUsers'
      }
    },
    {
      $project: {
        sessionId: 1,
        sessionName: 1,
        usersAttended: 1,
        notAttendedUsers: {
          $map: {
            input: {
              $filter: {
                input: '$allUsers',
                as: 'user',
                cond: {
                  $not: {
                    $in: [
                      '$$user.id',
                      '$usersAttended'
                    ]
                  }
                }
              }
            },
            as: 'user',
            in: '$$user.id'
          }
        }
      }
    },
    {
      $lookup: {
        from: 'tasks',
        localField: 'sessionId',
        foreignField: 'sessionId',
        as: 'taskInfo'
      }
    },
    {
      $project: {
        _id: 0,
        sessionId: 1,
        usersAttended: 1,
        notAttendedUsers: 1,
        notAttendedAndSumittedEither: {
          $filter: {
            input: '$notAttendedUsers',
            as: 'user',
            cond: {
              $not: {
                $in: [
                  '$$user',
                  {
                    $arrayElemAt: [
                      '$taskInfo.submittedUsers',
                      0
                    ]
                  }
                ]
              }
            }
          }
        }
      }
    }
  ]
);