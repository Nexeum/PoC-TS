interface CliGateway {
    execute(command: string): Promise<string>;
}
