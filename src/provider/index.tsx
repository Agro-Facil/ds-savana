import { ReactNode, createContext } from 'react';
import { AnimatableNumericValue, DimensionValue, TextStyle } from 'react-native';

type HexadecimalType = `#${string}`

type Percentage = `${number}%`

type StringOrNumber = string | number

type FontWeight = Exclude<TextStyle['fontWeight'], 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>

export interface ITheme {
  colors: {
    light?: HexadecimalType
    dark?: HexadecimalType
    white?: HexadecimalType
    black?: HexadecimalType
    primaryLight?: HexadecimalType
    primary?: HexadecimalType
    primaryDark?: HexadecimalType
    secondaryLight?: HexadecimalType
    secondary?: HexadecimalType
    secondaryDark?: HexadecimalType
    tertiaryLight?: HexadecimalType
    tertiary?: HexadecimalType
    tertiaryDark?: HexadecimalType
    grayLight?: HexadecimalType
    gray?: HexadecimalType
    grayDark?: HexadecimalType
    errorLight?: HexadecimalType
    error?: HexadecimalType
    errorDark?: HexadecimalType
    warningLight?: HexadecimalType
    warning?: HexadecimalType
    warningDark?: HexadecimalType
    cautionLight?: HexadecimalType
    caution?: HexadecimalType
    cautionDark?: HexadecimalType
    successLight?: HexadecimalType
    success?: HexadecimalType
    successDark?: HexadecimalType
    infoLight?: HexadecimalType
    info?: HexadecimalType
    infoDark?: HexadecimalType
    paletteBlue?: HexadecimalType
  },
  space: Record<StringOrNumber, Percentage | number>
  borderWidths: Record<StringOrNumber, number>
  radii: Record<StringOrNumber, AnimatableNumericValue>
  breakpoints: Record<StringOrNumber, DimensionValue>
  letterSpacings: Record<StringOrNumber, DimensionValue>
  lineHeights: Record<StringOrNumber, DimensionValue>
  fontWeights: Record<StringOrNumber, Exclude<TextStyle['fontWeight'], 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>,
  fonts: {
    heading?: string,
    body?: string,
    mono?: string,
  },
  fontSizes: Record<StringOrNumber, number>,
  opacity: Record<StringOrNumber, DimensionValue>
}

export const defaultTheme = {
  colors: {
    light: '#efeef1',
    dark: '#B7C0BC',
    white: '#FFFFFF',
    black: '#000000',
    primaryLight: '#F0F5F4',
    primary: '#339989',
    primaryDark: '#256b63',
    secondaryLight: '#CCE2DF',
    secondary: '#214F47',
    secondaryDark: '#17342f',
    tertiaryLight: '#e0e4e3',
    tertiary: '#b7c0bc',
    tertiaryDark: '#8b928f',
    grayLight: '#b1b1b1',
    gray: '#686763',
    grayDark: '#4F4F4F',
    errorLight: '#ffadad4a',
    error: '#D84848',
    errorDark: '#a83232',
    warningLight: '#ffe0664a',
    warning: '#fdc416',
    warningDark: '#b6912d',
    cautionLight: '#ffad6a4a',
    caution: '#ffad6a',
    cautionDark: '#cc8a54',
    successLight: '#75e17b4a',
    success: '#22c55e',
    successDark: '#1d9a41',
    infoLight: '#6ac7ff4a',
    info: '#0ea5e9',
    infoDark: '#0b7ba3',
    paletteBlue: '#2d9cdb'
  },
  space: {
    0: 0,
    1: 2,
    2: 4,
    4: 8,
    6: 12,
    8: 16,
    10: 20,
    12: 24,
    14: 28,
    16: 32,
    18: 36,
    20: 40,
    22: 44,
    24: 48,
    32: 64,
    40: 80,
    48: 96,
    62: 124,
    64: 128,
    80: 160,
    96: 192,
    112: 224,
    128: 256,
    144: 288,
    160: 320,
    '1/2': '50%' as Percentage,
    '1/3': '33.333%' as Percentage,
    '2/3': '66.666%' as Percentage,
    '1/4': '25%' as Percentage,
    '2/4': '50%' as Percentage,
    '3/4': '75%' as Percentage,
    '1/5': '20%' as Percentage,
    '2/5': '40%' as Percentage,
    '3/5': '60%' as Percentage,
    '4/5': '80%' as Percentage,
    '1/6': '16.666%' as Percentage,
    '2/6': '33.333%' as Percentage,
    '3/6': '50%' as Percentage,
    '4/6': '66.666%' as Percentage,
    '5/6': '83.333%' as Percentage,
    '1/10': '10%' as Percentage,
    '2/10': '20%' as Percentage,
    '3/10': '30%' as Percentage,
    '4/10': '40%' as Percentage,
    '5/10': '50%' as Percentage,
    '6/10': '60%' as Percentage,
    '7/10': '70%' as Percentage,
    '8/10': '80%' as Percentage,
    '9/10': '90%' as Percentage,
    'full': '100%' as Percentage,
  },
  borderWidths: {
    '0': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
  },
  radii: {
    'none': 0,
    'xs': 2,
    'sm': 4,
    'md': 6,
    'lg': 8,
    'xl': 10,
    '2xl': 12,
    '3xl': 14,
    '4xl': 16,
    '5xl': 20,
    '6xl': 24,
    'full': 9999,
  },
  breakpoints: {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  },
  letterSpacings: {
    'xs': -0.4,
    'sm': -0.2,
    'md': 0,
    'lg': 0.2,
    'xl': 0.4,
    '2xl': 1.6,
  },
  lineHeights: {
    '2xs': 16,
    'xs': 18,
    'sm': 20,
    'md': 22,
    'lg': 24,
    'xl': 28,
    '2xl': 32,
    '3xl': 40,
    '4xl': 48,
    '5xl': 56,
    '6xl': 72,
    '7xl': 90,
  },
  fontWeights: {
    hairline: '100' as FontWeight,
    thin: '200' as FontWeight,
    light: '300' as FontWeight,
    normal: '400' as FontWeight,
    medium: '500' as FontWeight,
    semibold: '600' as FontWeight,
    bold: '700' as FontWeight,
    extrabold: '800' as FontWeight,
    black: '900' as FontWeight,
    extraBlack: '950' as FontWeight,
  },
  fonts: {
    heading: undefined,
    body: undefined,
    mono: undefined,
  },
  fontSizes: {
    '2xs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 22,
    '3xl': 24,
    '4xl': 26,
    '5xl': 28,
    '6xl': 30,
    '7xl': 32,
    '8xl': 34,
    '9xl': 36,
  },
  opacity: {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
  }
}

export type DefaultTheme = typeof defaultTheme

const mergeObject = (target: ITheme, source: Partial<ITheme>): ITheme => {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  return Object.keys({ ...target, ...source }).reduce((acc, key) => {
    const targetValue = (target as any)[key];
    const sourceValue = (source as any)[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      (acc as any)[key] = [...targetValue, ...sourceValue];
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      (acc as any)[key] = mergeObject(targetValue, sourceValue);
    } else {
      (acc as any)[key] = sourceValue === undefined ? targetValue : sourceValue;
    }

    return acc;
  }, { ...target });
};

export const ContextTheme = createContext(defaultTheme as ITheme);

export const SavanaProvider: React.FC<{ config?: Partial<ITheme>; children: ReactNode }> = ({ config, children }): JSX.Element => {
  const currentTheme = mergeObject(defaultTheme as ITheme, config ?? {})

  return (
    <ContextTheme.Provider value={currentTheme}>
      {children}
    </ContextTheme.Provider>
  );
};

export default SavanaProvider;
