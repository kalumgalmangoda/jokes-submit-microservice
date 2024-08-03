import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './jokes.dto';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  async submitJoke(@Body() createDto: CreateJokeDto) {
    return this.jokesService.submitJoke(createDto);
  }

  @Get('random')
  async getRandomJoke() {
    return this.jokesService.getRandomJoke();
  }

  @Delete(':id')
  async deleteJoke(@Param('id') id: string) {
    return this.jokesService.deleteJoke(id);
  }

  @Get('types')
  getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  //   @Post('submit')
  //   submitJoke(@Body('type') type: string, @Body('content') content: string) {
  //     return this.jokesService.submitJoke(type, content);
  //   }

  @Get('all')
  getAllJokes() {
    return this.jokesService.getAllJokes();
  }
}
