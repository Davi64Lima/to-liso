import { Column, PrimaryColumn } from "typeorm"


export class User {

    @PrimaryColumn()
    id : string

    @Column()
    username : string
    
    @Column()
    password : string

    @Column()
    email : string
}      