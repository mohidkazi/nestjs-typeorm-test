import { Injectable } from "@nestjs/common";
import { Client, createConnection } from 'mysql'


@Injectable()
export class DatabaseService {
    constructor() {
    }
    connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql123',
        database: 'fakedb'
    });

    async connect() {
        this.connection.connect()
    }
    async end() {
        this.connection.end()
    }
}