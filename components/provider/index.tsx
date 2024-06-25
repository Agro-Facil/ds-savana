import React, { ReactNode, createContext } from 'react';

type HexadecimalType = `#${string}`

type StringOrNumber = string | number

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
    error?: HexadecimalType
    warning?: HexadecimalType
    success?: HexadecimalType
    info?: HexadecimalType
  },
  space?: Record<StringOrNumber, StringOrNumber>
  borderWidths?: Record<StringOrNumber, StringOrNumber>
  radii?: Record<StringOrNumber, StringOrNumber>
  breakpoints?: Record<StringOrNumber, StringOrNumber>
  letterSpacings?: Record<StringOrNumber, StringOrNumber>
  lineHeights?: Record<StringOrNumber, StringOrNumber>
  fontWeights?: {
    hairline?: number
    thin?: number
    light?: number
    normal?: number
    medium?: number
    semibold?: number
    bold?: number
    extrabold?: number
    black?: number
    extraBlack?: number
  },
  fonts?: {
    heading?: string,
    body?: string,
    mono?: string,
  },
  fontSizes?: Record<StringOrNumber, StringOrNumber>,
  opacity?: Record<StringOrNumber, StringOrNumber>
}

const defaultTheme: ITheme = {
  colors: {
    light: '#EEF4F2',
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
    error: '#D84848',
    warning: '#fdc416',
    success: '#22c55e',
    info: '#0ea5e9',
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
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    '1/10': '10%',
    '2/10': '20%',
    '3/10': '30%',
    '4/10': '40%',
    '5/10': '50%',
    '6/10': '60%',
    '7/10': '70%',
    '8/10': '80%',
    '9/10': '90%',
    'full': '100%',
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
    'xl': 12,
    '2xl': 16,
    '3xl': 20,
    '4xl': 24,
    '5xl': 32,
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
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extraBlack: 950,
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
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
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

export const ContextTheme = createContext(defaultTheme);

export const SavanaProvider: React.FC<{ config?: ITheme; children: ReactNode }> = ({ config, children }): JSX.Element => {
  const currentTheme = mergeObject(defaultTheme, config ?? {})

  return (
    <ContextTheme.Provider value={currentTheme}>
      {children}
    </ContextTheme.Provider>
  );
};

export default SavanaProvider;
