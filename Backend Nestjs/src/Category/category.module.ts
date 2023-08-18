import { Module } from "@nestjs/common";
import { CategoryController } from "./Controller/category.controller";
import { CategoryService } from "./Controller/category.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "./Model/category.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}])
    ],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}