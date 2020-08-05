import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../database/database.service";
import { v4 as uuidV4 } from 'uuid'

@Injectable()
export class UsersService {
    constructor(private readonly mysql: DatabaseService) { }
    async addUsers(payload) {
        try {
            const addUser = {
                id: uuidV4(),
                ...payload,
                isDeleted: 0
            }
            await this.mysql.connect()
            const saveUsers = await this.mysql.connection.query("INSERT INTO users SET ?", addUser)
            console.log(saveUsers);
            return 'user saved'
        } catch (error) {
            console.log('e: ', error);
            throw error
        } finally {
            await this.mysql.end()
        }
    }
}