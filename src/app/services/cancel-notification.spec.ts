import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification-service';
import { Notification } from "../entities/notification";
import { CancelNotification } from './cancel-notification';
import { Content } from '../entities/content';


describe('Cancel notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);
        const notification = makeNotification();

        await notificationsRepository.create(notification);
        await cancelNotification.execute({ notificationId: notification.id });

        expect(notificationsRepository.notifications[0].cancelAt).toEqual(expect.any(Date));
    });

    it('should not be able to cancel a non existing notification', async () => {
        const notificationsRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);


        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id',
            })
        }).rejects.toThrow(NotificationNotFound);
    })
})