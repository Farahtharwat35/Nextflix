import { Schema } from 'mongoose';

export type ID = Schema.Types.ObjectId;

export interface JwtPayload {
  email: string;
  username: string;
  id: ID;
  type: string;
}
