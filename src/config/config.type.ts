export type AppConfig = {
  nodeEnv: string;
  name: string;
  port: number;
};

export type DatabaseConfig = {
  url?: string;
  type?: string;
  host?: string;
  port?: number;
  password?: string;
  name?: string;
  username?: string;
  synchronize?: boolean;
};

export type WeatherConfig = {
  url: string;
  key: string;
};

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
  weather: WeatherConfig;
};
