import { ThemeColors } from '../interfaces';

// parse theme in PAB (primary;accent;background) format to theme colors object
export const parsePABToTheme = (themeStr: string): ThemeColors => {
  const [primary, accent, background, primary_rgb, accent_rgb, background_rgb] =
    themeStr.split(';');

  return {
    primary,
    accent,
    background,
    primary_rgb,
    accent_rgb,
    background_rgb,
  };
};

export const parseThemeToPAB = ({
  primary: p,
  accent: a,
  background: b,
  primary_rgb: pr,
  accent_rgb: ar,
  background_rgb: br,
}: ThemeColors): string => {
  return `${p};${a};${b};${pr};${ar};${br}`;
};
