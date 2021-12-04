import { BaseEntity, Column, Entity, ObjectID, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Posts extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: ObjectID;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    image!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    timestamp!: Date;

    @Column()
    postedby!: string;

}