import { DatabaseModule } from './../database/database.module';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { Module } from "@nestjs/common";
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { SendNotification } from '@app/services/send-notification-service';

@Module({
    imports: [DatabaseModule],
    providers: [KafkaConsumerService, SendNotification],
    controllers: [NotificationsController],
})
export class MessagingModule {}