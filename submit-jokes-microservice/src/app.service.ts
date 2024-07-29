/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private jokes = [];

  submitJoke(jokeDto: { joke: string; type: string }): string {
    this.jokes.push(jokeDto);
    return 'Joke submitted successfully';
  }

  getJokes(): any[] {
    return this.jokes;
  }
}
