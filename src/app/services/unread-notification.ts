import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';
import { type } from 'os';
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface UnreadNotificationRequest {
    notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
    constructor(private notificationRepository: NotificationRepository) { }

    async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
        const { notificationId } = request;
        const notification = await this.notificationRepository.findById(notificationId);

        if(!notification){
            throw new NotificationNotFound();
        }

        notification.unread();
        await this.notificationRepository.save(notification);
    }
} 