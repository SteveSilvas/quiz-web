// theme.ts
import { colors } from "./colors";
export interface ITheme {
  background: string;
  titleColor: string;
  color: string;
  borderColor: string;
  borderFocusColor: string;
  color2: string;
  iconColor: string;
}
export const lightTheme: ITheme = {
  background: colors.colorW,
  titleColor: colors.color05,
  color: colors.colorB,
  borderColor: colors.color02,
  borderFocusColor: colors.color03,
  color2: colors.color04,
  iconColor: colors.color01,
};

export const darkTheme = {
  background: colors.colorB,
  titleColor: colors.color04,
  color: colors.colorW,
  borderColor: colors.color02,
  borderFocusColor: colors.color03,
  color2: colors.color04,
  iconColor: colors.color01,
};
