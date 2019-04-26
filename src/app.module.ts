import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nest',
    password: 'nest',
    database: 'messageapp_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajesService],
})
export class AppModule {}
