import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true})
    email: string;

    @Column()
    bio: string;

    @Column({default: 0})
    followers_count: number;

    @Column({default: 0})
    following_count: number;

    @Column()
    password_hash: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    deleted_at: Date;
}