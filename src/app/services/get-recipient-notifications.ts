import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface getRecipientNotificationRequest {
    recipientId: string;
}

interface getRecipientNotificationResponse{
    notifications: Notification[];
}

@Injectable()
export class getRecipientNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(request: getRecipientNotificationRequest): Promise<getRecipientNotificationResponse> {
        const { recipientId } = request;
        const notifications = await this.notificationRepository.findManyByRecipientId(recipientId);
        return {notifications};
    }
} 