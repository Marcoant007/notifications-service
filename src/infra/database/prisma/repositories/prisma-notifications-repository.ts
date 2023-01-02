import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from 'src/app/repositories/notification-repository';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository{
    constructor(private prismaService : PrismaService ){}
    
    async findById(notificationId: string): Promise<Notification | null> {
        throw new Error('Method not implemented.');
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification); 
        await this.prismaService.notification.create({data: raw});
    }

    save(notification: Notification): Promise<void> {
        throw new Error('Method not implemented.');
    }

    countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error('Method not implemented.');
    }
}