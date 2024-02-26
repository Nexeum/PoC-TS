import CreateUser from './domain/usecase/CreateUser';
import { RedisAdapter } from './infrastructure/driven_adapters/redis/RedisAdapter';
import { Account } from './domain/models/Account';

async function run() {
    try {
        const redisAdapter = new RedisAdapter();
        const createUser = new CreateUser(redisAdapter);

        const account = new Account();
        account.name = "Usuario de Prueba";
        account.balance = 500;

        await createUser.createUser(account);

        const storedAccount = await redisAdapter.get('user:1');
        console.log('Account retrieved from Redis: ', storedAccount);
    } catch (error) {
        console.error(error);
    }
}

run();
