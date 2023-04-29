import { NextUIProvider } from '@nextui-org/react';
import theme from '../components/theme';
import React from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>

  );
}

export default MyApp;

