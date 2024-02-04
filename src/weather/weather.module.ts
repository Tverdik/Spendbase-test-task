import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from '../entities/weather.entity';
import { WeatherResponseInterceptor } from '../interceptors/weather-response.interceptor';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports: [TypeOrmModule.forFeature([Weather]), HttpModule],
  controllers: [WeatherController],
  providers: [WeatherService, WeatherResponseInterceptor],
})
export class WeatherModule {}
