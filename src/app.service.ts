import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const data = { message: 'Hello World!' };
    return data;
  }
}
