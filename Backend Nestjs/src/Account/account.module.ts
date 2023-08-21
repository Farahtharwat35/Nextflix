import { Module } from "@nestjs/common";
import { AccountController } from "./Controller/account.controller";
import { AccountService } from "./Controller/account.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "./Model/account.schema";
import { JwtService } from '@nestjs/jwt';
import { UserService } from "src/User/Controller/user.service";
import { User, UserSchema } from "src/User/Model/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [AccountController],
    providers: [AccountService, JwtService, UserService],
    exports: [AccountService]
})
export class AccountModule { }