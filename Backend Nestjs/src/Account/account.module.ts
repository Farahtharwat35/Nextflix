import { Module } from "@nestjs/common";
import { AccountController } from "./Controller/account.controller";
import { AccountService } from "./Controller/account.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "./Model/account.schema";
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])
    ],
    controllers: [AccountController],
    providers: [AccountService, JwtService],
    exports: [AccountService]
})
export class AccountModule { }