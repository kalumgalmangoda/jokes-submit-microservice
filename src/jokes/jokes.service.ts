import { Injectable } from '@nestjs/common';

export interface Joke {
  id: number;
  type: string;
  content: string;
}

@Injectable()
export class JokesService {
  private readonly jokes: Joke[] = [];
  private readonly jokeTypes = ['general', 'programming', 'knock-knock'];

  getJokeTypes(): string[] {
    return this.jokeTypes;
  }

  submitJoke(type: string, content: string): Joke {
    const newJoke: Joke = {
      id: this.jokes.length + 1,
      type,
      content,
    };
    this.jokes.push(newJoke);
    return newJoke;
  }

  getAllJokes(): Joke[] {
    return this.jokes;
  }
}
