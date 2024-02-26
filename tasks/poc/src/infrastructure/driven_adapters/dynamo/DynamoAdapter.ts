import AWS from 'aws-sdk';

export class DynamoDBAdapter implements DynamoGateway{
    private readonly docClient: AWS.DynamoDB.DocumentClient;

    constructor() {
        this.docClient = new AWS.DynamoDB.DocumentClient({
            region: 'us-east-1',
            endpoint: 'https://dynamodb.us-east-1.amazonaws.com',
        });
    }

    async getItem(key: string): Promise<any> {
        const params = {
            TableName: 'USERS',
            Key: {
                id: key,
            },
        };

        const result = await this.docClient.get(params).promise();
        return result.Item;
    }

    async setItem(key: string, value: any): Promise<void> {
        const params = {
            TableName: 'USERS',
            Item: {
                id: key,
                ...value,
            },
        };

        await this.docClient.put(params).promise();
    }

    async deleteItem(key: string): Promise<void> {
        const params = {
            TableName: 'TABLA_EJEMPLO',
            Key: {
                id: key,
            },
        };

        await this.docClient.delete(params).promise();
    }
}
