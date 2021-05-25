import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pizza_time')
  getPizza(): string {
    return this.appService.getPizza();
  }
  
  @Get('google')
  getLinkGoogle(): string {
    return this.appService.getLinkGoogle();
  }

  @Post('send_numbers')
  async postDataSendNumber(): Promise<number[]> {
    return this.appService.postDataSendNumbers();
  }
}
