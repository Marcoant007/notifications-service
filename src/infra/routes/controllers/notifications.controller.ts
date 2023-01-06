import { NotificationViewModule } from './../view-models/notifications-view-model';
import { SendNotification } from '@app/services/send-notification-service';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CancelNotification } from '@app/services/cancel-notification';
import { ReadNotification } from '@app/services/read-notification';
import { UnreadNotification } from '@app/services/unread-notification';
import { CountRecipientNotification } from '@app/services/count-recipient-notification';
import { GetRecipientNotification } from '@app/services/get-recipient-notifications';

@Controller("/notifications")
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unReadNotification: UnreadNotification,
    private countRecipientNotification: CountRecipientNotification,
    private getRecipientNotification: GetRecipientNotification
    ){}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string){
    await this.cancelNotification.execute({notificationId: id});
  }

  @Get('/count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string): Promise<{count: number}>{
    const {count} = await this.countRecipientNotification.execute({recipientId});
    return {count};
  }

  @Get('/from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string){
    const {notifications} = await this.getRecipientNotification.execute({recipientId});
    return {notifications : notifications.map(NotificationViewModule.toHTTP)};
  }

  @Patch(':id/read')
  async read(@Param('id') id: string){
    await this.readNotification.execute({notificationId: id});
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string){
    await this.unReadNotification.execute({notificationId: id});
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const {notification} = await this.sendNotification.execute({recipientId, content, category});
    return { notification: NotificationViewModule.toHTTP(notification)};
  }
}
