import { CountRecipientNotification } from './count-recipient-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification-service';
import { Notification } from "../entities/notification";
import { CancelNotification } from './cancel-notification';
import { Content } from '../entities/content';
import { makeNotification } from '@test/factories/notification-factory';


describe('Count recipients notification', () => {
    it('should be able to count recipients a notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

        await notificationsRepository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationsRepository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationsRepository.create(makeNotification({recipientId: 'recipient-2'}));

       const {count } = await countRecipientNotification.execute({recipientId: 'recipient-1'});
       expect(count).toEqual(2);     
    });
})