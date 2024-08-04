import { HttpException, Injectable } from '@nestjs/common';
import { Jokes } from './jokes.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateJokeDto, UpdateJokeDto } from './jokes.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

export interface Joke {
  // _id: string;
  type: string;
  content: string;
}

export interface JokeType {
  id: number;
  type: string;
}

@Injectable()
export class JokesService {
  private readonly predefinedJokeTypes: string[];

  constructor(
    @InjectModel('Jokes') private readonly jokesModel: Model<Jokes>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.predefinedJokeTypes =
      this.configService.get<string[]>('basicJokeTypes');
  }
  // private readonly jokes: Joke[] = [];
  // private readonly jokeTypes = ['general', 'programming', 'knock-knock'];

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

  async updateJoke(id: string, updateJokeDto: UpdateJokeDto): Promise<Jokes> {
    return this.jokesModel.findByIdAndUpdate(id, updateJokeDto, { new: true });
  }

  async getJokeTypes(): Promise<string[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get('http://localhost:3003/jokes/types'),
      );
      const fetchedJokeTypesData = response.data;
      const fetchedJokeTypes = fetchedJokeTypesData.map(
        (type: JokeType) => type.type,
      );
      // console.log('-----101-----', this.predefinedJokeTypes, fetchedJokeTypes);
      const finalJokeTypes = Array.from(
        new Set([...fetchedJokeTypes, ...this.predefinedJokeTypes]),
      );
      return finalJokeTypes;
    } catch (error) {
      throw new HttpException('Failed to fetch joke types', 500);
    }
    // return this.jokeTypes;
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

  async getAllJokes(): Promise<Joke[]> {
    const jokes = await this.jokesModel.find().exec();
    return jokes;
  }
}
