export const enum LogLevel {
  DEBUG,
  INFO ,
  WARN,
  ERROR,
  PERFORMANCE,
}

export type LogSink = (msg: string) => void;

export type Loggable = string | number | boolean | object;

export type CompileError = {
  message: string;
  line: number;
  column: number;
  file: string;
};

export type SimpleError = {
  message: string;
  line: number;
  column: number;
};

export type MemoryUsage = {
  rss: number;
  heapTotal: number;
  heapUsed: number;
  external: number;
  arrayBuffers: number;
};

export type MemorySnap = {
  allocated: MemoryUsage;
  delta: string;
};
