import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "../../users/entities/posts/entities/post.entity";
import { User } from "../../users/entities/user.entity";




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
    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({ name: "post_id"})
    post: Post;

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({ name: "user_id"})
    user: User;


}