import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsIn, IsNotEmpty, IsUrl } from 'class-validator';
import { HydratedDocument } from 'mongoose';;

export type CategoryDocument = HydratedDocument<Category>;
@Schema()
export class Category {
    @Prop()
    @IsNotEmpty()
    @IsIn(["Movie", "Series"])
    name: string

    @Prop()
    @IsUrl()
    url: string

}

export const CategorySchema = SchemaFactory.createForClass(Category);
