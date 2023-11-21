import { DataSource } from "typeorm";
import { User } from "../../modules/users/entities/user.entity";
import { Post } from "../../modules/users/entities/posts/entities/post.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        process.env.NODE_ENV === "production"
        ? "dist/src/modules/**/*.entity.js"
        : "src/modules/**/*.entity.ts",
    ],
    synchronize: true,
})

export async function startDatabase() {
    try {
        await AppDataSource.initialize();
    } catch (error) {
        console.error(error, "Error initialing database");
        throw error;
    }
}