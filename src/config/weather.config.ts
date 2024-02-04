import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';
import { WeatherConfig } from './config.type';
import validateConfig from '../utils/validate-config';

class EnvironmentVariablesValidator {
  @IsString()
  WEATHER_API: string;

  @IsString()
  WEATHER_API_KEY: string;
}

export default registerAs<WeatherConfig>('weather', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    url: process.env.WEATHER_API || '',
    key: process.env.WEATHER_API_KEY || '',
  };
});
