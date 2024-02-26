import { createClient } from 'redis';

export class RedisAdapter {
    private client;
    private isConnected = false;

    constructor() {
        this.client = createClient({
            url: 'redis://localhost:6379'
        });
    }

    async connect() {
        if (!this.isConnected) {
            await this.client.connect();
            this.isConnected = true;
        }
    }

    async set(key: string, value: any): Promise<void> {
        await this.connect(); // Asegurarse de conectar antes del comando
        await this.client.set(key, JSON.stringify(value));
    }

    async get(key: string): Promise<any> {
        await this.connect();
        const value = await this.client.get(key);
        return JSON.parse(value);
    }
}
