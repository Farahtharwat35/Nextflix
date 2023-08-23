import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/User/Model/user.schema';

@Schema()
export class WatchList extends Document {
	@Prop({ required: true, type: Types.ObjectId, ref: 'User' })
	user: User;

	@Prop({ required: true, type: Types.ObjectId })
	media: Types.ObjectId;
}

export const WatchListSchema = SchemaFactory.createForClass(WatchList);
