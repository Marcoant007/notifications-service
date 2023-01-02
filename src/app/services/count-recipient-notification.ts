import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface CountRecipientNotificationRequest {
    recipientId: string;
}

interface CountRecipientNotificationResponse{
    count: number;
}

@Injectable()
export class CountRecipientNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
        const { recipientId } = request;
        const count = await this.notificationRepository.countManyByRecipientId(recipientId);
        return {count};
    }
} 