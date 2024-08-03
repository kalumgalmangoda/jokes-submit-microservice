import { Body, Controller, Get, Post } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get('types')
  getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  @Post('submit')
  submitJoke(@Body('type') type: string, @Body('content') content: string) {
    return this.jokesService.submitJoke(type, content);
  }

  @Get('all')
  getAllJokes() {
    return this.jokesService.getAllJokes();
  }
}
