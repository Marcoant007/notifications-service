import { Content } from './content';

describe('Notification content', () => {
    it('should be able to create a notificiation content', ()=> {
        const content = new Content("Você recebeu uma solicitação de amizade");
        expect(content).toBeTruthy();
    })
    
    it('should not be able to create a notificiation content with less than 5 characters', ()=> {
        expect(() => new Content("OIE")).toThrow();
    })
    
    it('should not be able to create a notificiation content with less than 240 characters', ()=> {
        expect(() => new Content("A".repeat(241))).toThrow();
    })
})
