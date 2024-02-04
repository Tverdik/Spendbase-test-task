import { IsEnum, IsJSON, IsNumber, IsOptional } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';

export enum Parts {
  CURRENT = 'current',
  MINUTELY = 'minutely',
  HOURLY = 'hourly',
  DAILY = 'daily',
  ALERTS = 'alerts'
}

@Entity()
export class Weather extends Base {
  @Column()
  @IsNumber()
  lat: number;

  @Column()
  @IsNumber()
  lon: number;

  @Column({ default: Parts.CURRENT })
  @IsEnum(Parts)
  @IsOptional()
  part?: Parts;

  @Column({ type: 'json' })
  data: any;
}
