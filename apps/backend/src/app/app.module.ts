import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Configuration
import { ConfigModule } from '@nestjs/config';

// Modules
import { DatabasesModule } from '../databases/databases.module';
import { AuthModule } from '../auth/auth.module';

// Databases config files
import StudyGroup_MariaDB from '../databases/study-group.mariadb.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [StudyGroup_MariaDB],
      isGlobal: true,
    }),
    DatabasesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {

  constructor() {}
}
