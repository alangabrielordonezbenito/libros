const themesValues = {
  DARK: 'dark',
  LIGHT: 'light',
};

export interface ThemeContext<T> {
  getThemeState(): string;
  handleChangeTheme(context: T): any;
}

export abstract class ThemeState {
  abstract state: any;
  abstract getStatus(): void;
}

export class DarkThemeState implements ThemeContext<ThemeState> {
  public handleChangeTheme(context: ThemeState) {
    context.state = new LightThemeState();
  }

  public getThemeState(): string {
    return themesValues.DARK;
  }
}

export class LightThemeState implements ThemeContext<ThemeState> {
  public handleChangeTheme(context: ThemeState) {
    context.state = new DarkThemeState();
  }

  public getThemeState(): string {
    return themesValues.LIGHT;
  }
}
