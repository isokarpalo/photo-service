import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    describtion: string;

    @Column()
    url: string;

    @ManyToOne(() => User, (user) => user.photos)
    user: User;
}