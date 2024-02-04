import { Parts } from "../../entities/weather.entity";
import { QueryParams } from "../../utils/paramsToString";

export interface WeatherQueryParams extends QueryParams {
  lat: number;
  lon: number;
  part?: Parts;
};
