import { SendNotification } from '@app/services/send-notification-service';
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

interface SendNotificationPayload {
    content: string;
    category: string;
    recipientId: string;
}

@Controller()
export class NotificationsController {
    constructor(private sendNotifications: SendNotification){}

    @EventPattern('notifications.send-notification')
    async handleSendNotification(@Payload() {content,category, recipientId}: SendNotificationPayload){
        await this.sendNotifications.execute({
            content,
            category,
            recipientId
        });

        console.log("NOSSA NOSSA UMA MENSSAGINHA");
    }
}