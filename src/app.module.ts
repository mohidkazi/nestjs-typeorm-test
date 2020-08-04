import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './users/controller/users.controller';
import { UsersService } from './users/service/users.service';

@Module({
    imports: [
        DatabaseModule.register()
    ],
    providers: [UsersController, UsersService],
    exports: [UsersController, UsersService],
})
export class AppModule { }