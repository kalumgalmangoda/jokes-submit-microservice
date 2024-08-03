import { Injectable } from '@nestjs/common';
import { Jokes } from './jokes.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateJokeDto } from './jokes.dto';

export interface Joke {
  id: number;
  type: string;
  content: string;
}

@Injectable()
export class JokesService {
  constructor(
    @InjectModel('Jokes') private readonly jokesModel: Model<Jokes>,
  ) {}
  private readonly jokes: Joke[] = [];
  private readonly jokeTypes = ['general', 'programming', 'knock-knock'];

  async submitJoke(createJokeDto: CreateJokeDto): Promise<Jokes> {
    const createdJoke = new this.jokesModel(createJokeDto);
    return createdJoke.save();
  }

  async getRandomJoke(): Promise<Jokes> {
    const jokes = await this.jokesModel.find().exec();
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  async deleteJoke(id: string): Promise<Jokes> {
    return this.jokesModel.findByIdAndDelete(id);
  }

  //   async update(id: string, updateJokeDto: UpdateJokeDto): Promise<Jokes> {
  //     return this.jokesModel.findByIdAndUpdate(id, updateJokeDto, { new: true });
  //   }

  getJokeTypes(): string[] {
    return this.jokeTypes;
  }

  //   submitJoke(type: string, content: string): Joke {
  //     const newJoke: Joke = {
  //       id: this.jokes.length + 1,
  //       type,
  //       content,
  //     };
  //     this.jokes.push(newJoke);
  //     return newJoke;
  //   }

  getAllJokes(): Joke[] {
    return this.jokes;
  }
}
