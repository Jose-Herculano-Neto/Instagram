import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";




@Entity("Comments")
export class Comment {
    @PrimaryColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    post_id: number;

    @Column()
    user_id: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    deleled_at: Date;

    // Relations

    

}