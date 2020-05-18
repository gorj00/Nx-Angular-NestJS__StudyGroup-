import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// DB Connection
import { TypeOrmModule } from '@nestjs/typeorm';

// DB Entities
import { DemoModule } from '../app/demo/demo.module';
import { StudyGroupModule } from '../app/study-group/study-group.module';
import { SubjectModule } from '../app/subject/subject.module';


/* Generate a new feature:
* ng g @nestjs/schematics:module <module-name> --source-root apps/backend/src
* ng g @nestjs/schematics:controller <controller-name> --source-root apps/backend/src
*
* Generate a new subfeature:
* ng g @nestjs/schematics:controller <controller-name> --path app/<feature-name> --source-root apps/backend/src
*/

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    }),
    DemoModule,
    StudyGroupModule,
    SubjectModule,
  ]
})
export class DatabasesModule {}
