import { Controller, Get, HttpCode, Post, Query, UseInterceptors } from '@nestjs/common';
import { WeatherResponseInterceptor } from '../interceptors/weather-response.interceptor';
import { WeatherQueryParams } from './interfaces';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor (private readonly weatherService: WeatherService) {}

  @Post()
  @HttpCode(201)
  saveWeather(@Query() params: WeatherQueryParams) {
    this.weatherService.saveWeather(params);
  }

  @UseInterceptors(WeatherResponseInterceptor)
  @Get()
  getWeather(@Query() params: WeatherQueryParams) {
    return this.weatherService.getWeather(params);
  }
}
