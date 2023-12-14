import { IsNotEmpty, IsUUID } from "class-validator"

export class CreateUserDTO {

    @IsUUID()
    id : string

    @IsNotEmpty()
    username : string
    
    
    password : string

    
    email : string
}      
