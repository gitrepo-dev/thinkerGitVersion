import { BaseEntity, Column, Entity, ObjectID, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: ObjectID;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string

}