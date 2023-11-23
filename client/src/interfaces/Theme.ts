export interface ThemeColors {
  background: string;
  primary: string;
  accent: string;
  primary_rgb: string,
  accent_rgb: string,
  background_rgb: string,
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  isCustom: boolean;
}
