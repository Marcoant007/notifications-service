import { NotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from "@nestjs/common";

@Module({
    providers: [PrismaService, {
        provide: NotificationRepository,
        useClass: PrismaNotificationRepository
    }],

    exports: [
        NotificationRepository
    ]
})


export class DatabaseModule { }