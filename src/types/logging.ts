export const enum LogLevel {
  DEBUG,
  INFO ,
  WARN,
  ERROR
}

export type LogSink = (msg: string) => void;

export type Loggable = string | number | boolean | object;