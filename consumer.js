const { kafka } = require("./client");
const group = process.argv[2]; //while entering run command like node consumer.js consumerGroupName eg node consumer.js user-1

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });//auto balancing

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value.toString()
      );
    },
  });
}

init();