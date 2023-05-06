type ColorBg = '#E33939' | '#47B091' | '#FFFFFF'
type Color = '#FFFFFF' | '#8F8F8F'

export interface ProfileNavigationData {
  img: string;
  text: string;
  additionalString?: string;
  notifications?: number;
  colorBg?: ColorBg;
  color?: Color;
  link: string;
}