import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/orm.config';
import { APP_FILTER } from '@nestjs/core';
import { HttpError } from './error/error.filter';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MahasiswaModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpError
  }],
})
export class AppModule {}
