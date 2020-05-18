import { Controller, Get, UseGuards  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from '../auth/auth.service';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              /* private authService: AuthService */) {}

  @Get('hello')
  getData(): any {
    return this.appService.getData();
  }

  @Get('unprotected')
  unprotected() : string {
    return 'Unprotected';
  }

  @UseGuards(AuthGuard('oauth-bearer'))
  @Get('protected')
  protected() : string {
    console.log('Protected route success!')
    return 'Protected';
  }
}
