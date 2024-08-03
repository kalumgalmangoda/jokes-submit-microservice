// src/modules/your-module/your.model.ts

import { Document } from 'mongoose';

export interface Jokes extends Document {
  readonly content: string;
  readonly type: string;
  readonly createdAt: Date;
}
