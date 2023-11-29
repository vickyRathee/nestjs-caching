import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    const data = this.appService.getHello();
    res.status(200).json(data);
  }

  @Get('/this-works')
  getWorks() {
    const data = this.appService.getHello();
    return data;
  }
}
