export const enum LogLevel {
  DEBUG,
  INFO ,
  WARN,
  ERROR
}

export type LogSink = (msg: string) => void;

export type Loggable = string | number | boolean | object;

export type CompileError = {
  message: string;
  line: number;
  column: number;
  file: string;
};