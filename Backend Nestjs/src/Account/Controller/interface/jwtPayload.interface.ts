import { ObjectId } from 'bson';

export interface JwtPayload {
  email: string;
  username: string;
  id: ObjectId;
  type: string;
}
