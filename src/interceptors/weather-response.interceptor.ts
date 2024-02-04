import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class WeatherResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler){
    const req = context.switchToHttp().getRequest();
    const part = req.query.part;

    return handler.handle()
      .pipe(map(weather => ({
        sunrise: weather.data[part].sunrise,
        sunset: weather.data[part].sunset,
        temp: weather.data[part].temp,
        feels_like: weather.data[part].feels_like,
        pressure: weather.data[part].pressure,
        humidity: weather.data[part].humidity,
        uvi: weather.data[part].uvi,
        wind_speed: weather.data[part].wind_speed,
        })
      ));
  }
}
