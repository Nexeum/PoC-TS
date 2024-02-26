interface DynamoGateway {
    getItem(key: string): Promise<any>;
    setItem(key: string, value: any): Promise<void>;
    deleteItem(key: string): Promise<void>;
}