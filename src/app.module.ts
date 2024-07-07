import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogsModule } from './dogs/dogs.module';
import { FavouritesModule } from './favourites/favourites.module';

import * as dotenv from 'dotenv';

console.log(process.env.POSTGRES_PASS);

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: Boolean(process.env.POSTGRES_SYNCHRONIZE),
    }),
    DogsModule,
    FavouritesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
