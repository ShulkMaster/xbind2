import { LogLevel } from './logging';

export type Arguments = {
  sources: string;
  logLevel: string | LogLevel;
}