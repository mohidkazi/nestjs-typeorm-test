import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "../service/users.service";
import { AddUserDto } from '../dto/users.dto'

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('add')
    async addUsers(
        @Body() payload: AddUserDto
    ) {
        try {
            return await this.userService.addUsers(payload)
        } catch (error) {
            throw error
        }
    }

    @Get('fetch')
    async getUsers() {
        try {

        } catch (error) {
            throw error
        }
    }
}