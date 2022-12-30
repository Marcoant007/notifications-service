import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from 'src/app/repositories/notification-repository';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository{
    
    constructor(private prismaService : PrismaService ){}

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt
            }
        })
    }

}