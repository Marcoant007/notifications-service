import { CountRecipientNotification } from './count-recipient-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification-service';
import { Notification } from "../entities/notification";
import { CancelNotification } from './cancel-notification';
import { Content } from '../entities/content';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notifications';


describe('GET recipients notification', () => {
    it('should be able to get recipients a notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const getRecipientNotification =  new GetRecipientNotification(notificationsRepository);

        await notificationsRepository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationsRepository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationsRepository.create(makeNotification({recipientId: 'recipient-2'}));

       const { notifications } = await getRecipientNotification.execute({recipientId: 'recipient-1'});
       expect(notifications).toHaveLength(2);
       expect(notifications).toEqual(expect.arrayContaining([
        expect.objectContaining({recipientId: 'recipient-1'}),
        expect.objectContaining({recipientId: 'recipient-1'})
       ]))  
    });
})