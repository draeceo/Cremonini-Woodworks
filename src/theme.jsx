/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const customTheme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    palette: ["#e63946","#f1faee","#a8dadc","#457b9d","#1d3557"]
  },
  fonts: {
    default: 'Baskerville',
    button: 'Roboto'
  },
  fontWeights: {
    body: 400,
    heading: 600
  },
  fontSizes: {
    xs: 12,
    s: 14,
    default: 16,
    m: 20,
    l: 24,
    xl: 38,
    huge: 48
  },
  radii: {
    square: 0,
    round: 9999
  },
  buttons: {
    primary: {
      borderRadius: 'round',
      bg: 'main',
      fontFamily: 'default',
      fontSize: 'm',
      ':hover': {
        bg: 'palette.4'
      },
      boxShadow: '3px 3px 15px #000'
    },
    secondary: {
      borderRadius: 'round',
      bg: 'text'
    }
  },
  text: {
    heading: {
      fontFamily: 'default',
      fontSize: 'huge',
      color: 'background',
      fontWeight: 'heading'
    }
  },
  variants: {
    navLogo: {
      height: [175, 125],
      mx: 10,
      href: '/test'
    },
    navLink: {
      fontFamily: 'default',
      fontSize: ['l', 'm'],
      color: 'background',
      ':hover': {
        color: 'main'
      },
      fontWeight: 'body',
      textDecoration: 'none',
      textTransform: 'uppercase',
      px: 10,
      pt: [10, 0]
    }
  }
}

customTheme.colors.main = customTheme.colors.palette[3];
customTheme.colors.light = customTheme.colors.palette[2];
customTheme.colors.xLight = customTheme.colors.palette[1];
customTheme.colors.error = customTheme.colors.palette[0];

const Theme = (props) => <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
export default Theme;