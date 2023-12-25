import React, { useEffect } from 'react';
import Container from '@/components/layouts/Container';

import '@/styles/globals.css';
import '@/styles/app.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker
          .register('/service-worker.js', { scope: '/' })
          .then(function (registration) {
            console.log('SW registered: ', registration);
          })
          .catch(function (registrationError) {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
