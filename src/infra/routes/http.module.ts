import { DatabaseModule } from './../database/database.module';
import { SendNotification } from './../../app/services/send-notification-service';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification],
})

export class HttpModule {}
