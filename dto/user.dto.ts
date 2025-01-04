import { IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";

export class UserDto {

    @IsString()
    @IsNotEmpty()
    userName: string

    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsNumber()
    @IsNotEmpty()
    phoneNumber: string

}