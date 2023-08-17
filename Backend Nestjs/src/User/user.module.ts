import { Module } from "@nestjs/common";
import { UserController } from "./Controller/user.controller";
import { UserService } from "./Controller/user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./Model/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}