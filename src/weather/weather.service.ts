import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { AllConfigType } from '../config/config.type';
import { Parts, Weather } from '../entities/weather.entity';
import paramsToString from '../utils/paramsToString';
import { WeatherQueryParams } from './interfaces';

@Injectable()
export class WeatherService {
  apiUrl: string;
  constructor (
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
    private readonly configService: ConfigService<AllConfigType>,
    private readonly httpService: HttpService
  ) {
    this.apiUrl = this.configService.get('weather.url', { infer: true }) || '';
  }

  private modifyUrl (params: WeatherQueryParams) {
    const url = `${this.apiUrl}/onecall?appid=${this.configService.get('weather.key', { infer: true }) || ''}`;
    const exclude = Object.values(Parts)
      .filter(item => item !== params.part)
      .join(',')
    
    delete params.part;
    params.exclude = exclude;
    return `${url}&${paramsToString(params)}`;
  }

  async saveWeather(params: WeatherQueryParams) {
    if (!params.lat || !params.lon) {
      throw new BadRequestException('There is some issue with lat or lon params.');
    }

    if (!params.part) {
      params.part = Parts.CURRENT;
    }

    const part = params.part;
    const url = this.modifyUrl(params);
    const weather = await this.httpService.axiosRef.get(url);

    await this.weatherRepository.save({
      lat: params.lat,
      lon: params.lon,
      part,
      data: weather.data
    });
  }

  async getWeather(params: WeatherQueryParams) {
    const weather = await this.weatherRepository.findOne({ where: params });

    if (!weather) {
      throw new NotFoundException('Data about weather in this time not found.');
    }

    return weather;
  }
}
