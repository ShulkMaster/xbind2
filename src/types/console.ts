export type CompileOptions = {
  log: string;
  plugin: string;
  output: string;
}

export const enum ExitCodes {
  Ok = 0,
  Error = 1,
}