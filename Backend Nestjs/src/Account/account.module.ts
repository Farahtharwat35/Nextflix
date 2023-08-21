import { Module } from "@nestjs/common";
import { AccountController } from "./Controller/account.controller";
import { AccountService } from "./Controller/account.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Account, AccountSchema } from "./Model/account.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Account.name, schema: AccountSchema}])
    ],
    controllers: [AccountController],
    providers: [AccountService]
})
export class AccountModule {}