//Find all the topics and tasks which are thought in the month of October - Input Query


db.getCollection('tasks').aggregate([
  {
    $match: {
      scheduleDate: {
        $gte: new Date('2024-10-01'),
        $lt: new Date('2024-11-01')
      }
    }
  },
  {
    $lookup: {
      from: "topics",
      localField: "scheduleDate",
      foreignField: "scheduleDate",
      as: "Topics"
    }
  },
  {
    $addFields: {
      topicsCovered: {
        $arrayElemAt: ["$Topics.content", 0]
      }
    }
  },
  {
    $project: {
      _id: 0,                          // Exclude _id from output
      SessionName: "$Name",            // Rename Name to SessionName
      ScheduleDate: "$scheduleDate",   // Keep scheduleDate
      TopicsCovered: "$topicsCovered"  // Keep topicsCovered
    }
  }
]);

