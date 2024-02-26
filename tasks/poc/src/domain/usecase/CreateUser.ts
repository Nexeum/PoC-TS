import { Account } from '../models/Account';
import { RedisAdapter } from '../../infrastructure/driven_adapters/redis/RedisAdapter';

export default class CreateUser {
    private readonly redisAdapter: RedisAdapter;

    constructor(redisAdapter: RedisAdapter) {
        this.redisAdapter = redisAdapter;
    }

    async createUser(account: Account): Promise<void> {
        if (!account.id) {
            account.id = 1;
        }

        try {
            await this.redisAdapter.set(`user:${account.id}`, account);
        } catch (error) {
            console.error('Error al guardar el usuario en Redis:', error);
        }
    }
}
