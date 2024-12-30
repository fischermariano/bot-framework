import { ActivityHandler, MessageFactory } from 'botbuilder';
import { queryCustomerAPI } from './apiClient';

export class MyBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            const text = context.activity.text.toLowerCase();
            if (text.includes('customer')) {
                const customerId = text.split(' ')[1];
                const customerData = await queryCustomerAPI(customerId);
                await context.sendActivity(MessageFactory.text(`Customer Data: ${JSON.stringify(customerData)}`));
            } else {
                await context.sendActivity(MessageFactory.text('I can help you with customer information. Please provide a customer ID.'));
            }
            await next();
        });
    }
}
