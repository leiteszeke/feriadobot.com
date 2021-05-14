import * as styledComponents from 'styled-components';

export const theme = {
  colors: {
    // Branding
    green: '#00C071',
    gray: '#1D1E22',
    darkGray: '#1A1A1D',
    backgroundBlack: '#11181B',

    // Actionables
    red: '#F54747',
    orange: '#FFA800',

    // Brands
    facebookBlue: '#327EFF',

    // Generics
    white: '#FFFFFF',
    black: '#000000',
    genericGray: '#CCCCCC',
    mediumGray: '#707070',
    transparent: 'transparent'
  }
};

export type Theme = typeof theme;

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
  withTheme
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
  withTheme
};
export default styled;
