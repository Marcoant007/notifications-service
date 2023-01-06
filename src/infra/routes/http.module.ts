import { UnreadNotification } from './../../app/services/unread-notification';
import { ReadNotification } from './../../app/services/read-notification';
import { GetRecipientNotification } from './../../app/services/get-recipient-notifications';
import { CountRecipientNotification } from '@app/services/count-recipient-notification';
import { CancelNotification } from './../../app/services/cancel-notification';
import { DatabaseModule } from './../database/database.module';
import { SendNotification } from './../../app/services/send-notification-service';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        GetRecipientNotification,
        ReadNotification,
        UnreadNotification,
    ],
})

export class HttpModule {}
