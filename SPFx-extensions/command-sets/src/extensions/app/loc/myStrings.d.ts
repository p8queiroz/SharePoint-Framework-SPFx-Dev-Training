declare interface IAppCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'AppCommandSetStrings' {
  const strings: IAppCommandSetStrings;
  export = strings;
}
