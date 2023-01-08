import { KafkaConsumerService } from '../../messaging/kafka/kafka-consumer.service';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    providers: [KafkaConsumerService],
    controllers: [],
})
export class MessagingModule {}