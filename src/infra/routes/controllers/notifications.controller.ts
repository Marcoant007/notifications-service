import { NotificationViewModule } from './../view-models/notifications-view-model';
import { SendNotification } from '@app/services/send-notification-service';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller("/notifications")
export class NotificationsController {

  constructor(private sendNotification: SendNotification){}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const {notification} = await this.sendNotification.execute({recipientId, content, category});
    return { notification: NotificationViewModule.toHTTP(notification)};
  }
}
