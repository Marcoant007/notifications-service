import { Content } from './content';
import { Notification } from './notification';
describe('Notification', () => {
    it('should be able to create a notificiation', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'social',
            recipientId: 'example-recipient-Id'
        });
        expect(notification).toBeTruthy();
    })
})