/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('submit')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('joke')
  submitJoke(@Body() jokeDto: { joke: string, type: string }): string {
    return this.appService.submitJoke(jokeDto);
  }
}