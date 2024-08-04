import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JokesSchema } from './jokes.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Jokes', schema: JokesSchema }]),
    HttpModule,
  ],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
