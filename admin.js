// Admin maintaing number of topics and partionings

const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");
  
    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
      topics: [
        {
          topic: "rider-updates",
          numPartitions: 2,//NORTH , SOUTH
        },
      ],
    });
    console.log("Topic Created Success [rider-updates]");
  
    console.log("Disconnecting Admin..");
    await admin.disconnect();
  }
  
  init();