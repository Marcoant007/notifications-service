import { NotificationProps } from './../../src/app/entities/notification';
import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'example-recipient-id',
        ...override
    });
}