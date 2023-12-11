import { CompileError, Loggable, LogLevel, LogSink } from 'types/logging';

export class Logger {
  private static level: LogLevel = LogLevel.ERROR;
  private static sink: LogSink = console.log;

  static setSink(sink: LogSink): void {
    this.sink = sink;
  }

  static setLevel(level: string | LogLevel): void {
    if (typeof level === 'number') {
      this.level = level;
      return;
    }

    const levelCase = level.toUpperCase();

    switch (levelCase) {
      case 'DEBUG':
        this.level = LogLevel.DEBUG;
        break;
      case 'INFO':
        this.level = LogLevel.INFO;
        break;
      case 'WARN':
        this.level = LogLevel.WARN;
        break;
      case 'ERROR':
        this.level = LogLevel.ERROR;
        break;
      default:
        Logger.error(`Invalid log level: ${level}, defaulting to ERROR`);
        this.level = LogLevel.ERROR;
        break;
    }
  }

  private static log(level: LogLevel, message: Loggable, padding: number | undefined): void {
    if (level < this.level) {
      return;
    }
    const typeOf = typeof message;
    const pad = padding ? ' '.repeat(padding) : '';
    if(typeOf !== 'object') {
      this.sink(`${pad}${message}`);
      return;
    }

    const json = JSON.stringify(message, undefined, 2);
    json.split('\n').forEach((line) => {
      this.sink(`${pad}${line}`);
    });
  }

  public static debug(message: Loggable, padding?: number): void {
    this.log(LogLevel.DEBUG, message, padding);
  }

  public static info(message: Loggable, padding?: number): void {
    this.log(LogLevel.INFO, message, padding);
  }

  public static warn(message: Loggable, padding?: number): void {
    this.log(LogLevel.WARN, message, padding);
  }

  public static error(message: Loggable, padding?: number): void {
    this.log(LogLevel.ERROR, message, padding);
  }

  public static compileErrors(errors: CompileError[]): void {
    for (const error of errors) {
      const { file, column, line, message} = error;
      Logger.error(`${file} (${line},${column}): ${message}`);
    }
  }
}