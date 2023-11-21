import { Request } from "express";
import { AppDataSource } from "../../../services/database/app-data-source";
import { User } from "../entities/user.entity";



class UserController {
    async createUser(req: Request, res: Response){
        const { name, email, password } = req.body;
        req.params

        try{
            const user = await AppDataSource.getRepository(User).save({
                name: name,
                email: email,
                password: password,
            });
            console.log(`User ${user.id} created`);
            res.status(201).json({ message: "Usuário criado com sucesso"});
        } catch (error) {
            return res.status(400).json({ message: "Erro ao criar usuário"});
        }
    }

    async listUsers(req: Request, res: Response){
        try {
            const users = await AppDataSource.getRepository(User).find({select: ["id", "name", "bio", "followers_count"],});
            return res.status(200).json({ ok: true, users});
        } catch (error) {
            return res.status(400).json({ message: "Erro ao listar usuários"})
        }
    }
}


export default new UserController();