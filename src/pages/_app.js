import React from 'react';

import Container from '@/components/layouts/Container';

import '@/styles/globals.css';
import '@/styles/app.css';

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
