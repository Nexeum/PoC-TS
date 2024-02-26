import { DynamoDBAdapter } from "./DynamoAdapter";

const adapter = new DynamoDBAdapter();

const user = {
    name: 'Test',
    email: 'test@gmail.com',
};

adapter.setItem('1234', user);

const retrievedUser = adapter.getItem('1234');

console.log(retrievedUser);

adapter.deleteItem('1234');

