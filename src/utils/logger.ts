import { Loggable, LogLevel, LogSink } from 'types/logging';

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

  private static log(level: LogLevel, message: Loggable): void {
    if (level < this.level) {
      return;
    }
    const typeOf = typeof message;
    if(typeOf !== 'object') {
      this.sink(message.toString());
      return;
    }

    this.sink(JSON.stringify(message, undefined, 2));
  }

  public static debug(message: Loggable): void {
    this.log(LogLevel.DEBUG, message);
  }

  public static info(message: Loggable): void {
    this.log(LogLevel.INFO, message);
  }

  public static warn(message: Loggable): void {
    this.log(LogLevel.WARN, message);
  }

  public static error(message: Loggable): void {
    this.log(LogLevel.ERROR, message);
  }
}