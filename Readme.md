## Commands
- Start Zookeper Container and expose PORT `2181` in one termianl.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092` and setup ENV variables in second terminal.
```bash
docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.18:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.18:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka

-- Run Admin
```bash
node admin.js
```


## Running Locally
- Create Producer
```bash
node producer.js
```
```bash
> kala south
> kala north
```
- Run Multiple Consumers
```bash
node consumer.js <GROUP_NAME>
```