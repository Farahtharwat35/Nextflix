import { Module } from "@nestjs/common";
import { AccountController } from "./Controller/account.controller";
import { AccountService } from "./Controller/account.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "./Model/account.schema";
import { UserModule } from "src/User/user.module";
import { UserService } from "src/User/Controller/user.service";
import { User, UserSchema } from "src/User/Model/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Account.name, schema: AccountSchema}, {name: User.name, schema: UserSchema}])
    ],
    controllers: [AccountController],
    providers: [AccountService]
})
export class AccountModule {}