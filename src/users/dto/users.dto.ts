export class AddUserDto {
    name: string;

    alias: string;
}

export class GetUsersDto {
    id: string

    name: string;

    alias: string;

    isDeleted: string | number
}