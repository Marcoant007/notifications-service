/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsUUID, Length } from "@nestjs/class-validator";


export class CreateNotificationBody {

    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240)
    content:string;

    @IsNotEmpty()
    category: string;
}