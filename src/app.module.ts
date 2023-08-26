import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

import { PeopleModule } from './modules/people/people.module';
import { FilmsModule } from './modules/films/films.module';
import { PlanetsModule } from './modules/planets/planets.module';
import { StarshipsModule } from './modules/starships/starships.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    PeopleModule,
    FilmsModule,
    PlanetsModule,
    StarshipsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
