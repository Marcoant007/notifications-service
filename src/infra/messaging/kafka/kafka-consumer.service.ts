import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['welcome-hound-6406-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'd2VsY29tZS1ob3VuZC02NDA2JFBmd_MczWidITOMS78McwYYO4SICV_QGbHTKfc',
                    password: '8d04190233f64143a3ba9e619c68f150',
                },
                ssl: true,
            }
        })
    }

    async onModuleDestroy() {
        await this.close();
    }

}