// Member.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface MemberInterface {
  memberNumber: string;
  name: string;
  phone: string;
  nidNumber: string;
  educationalInstitute: string;
  address: string;
}

export const memberSchema: Schema = new Schema({
  memberNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  nidNumber: { type: String, required: true },
  educationalInstitute: { type: String, required: true },
  address: { type: String, required: true },
});

export interface MemberDocument extends MemberInterface, Document {}

export const Member = mongoose.model<MemberDocument>('Member', memberSchema);