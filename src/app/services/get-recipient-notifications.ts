import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface GetRecipientNotificationRequest {
    recipientId: string;
}

interface GetRecipientNotificationResponse{
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
        const { recipientId } = request;
        const notifications = await this.notificationRepository.findManyByRecipientId(recipientId);
        return {notifications};
    }
} 