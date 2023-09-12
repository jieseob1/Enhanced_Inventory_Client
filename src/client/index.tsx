// import * as Sentry from '@sentry/browser';
// import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import ReactDOM from "react-dom/client";
import { AppProvider } from '@shopify/polaris';
// import AppProvider from 'components/AppProvider';
// import RelayProvider from 'components/RelayProvider';
import Suspense from '../components/Suspense';
// import config from 'config';
// import RelayEnvironment from 'relay/environment';
import App from '../App';
import '@shopify/polaris/build/esm/styles.css';
// import GlobalStyle from 'styles/global';
// import theme from 'styles/theme';

// if (config.sentryDsn) {
//   Sentry.init({
//     dsn: config.sentryDsn,

//     // Alternatively, use `process.env.npm_package_version` for a dynamic release version
//     // if your build tool supports it.
//     // release: process.env.npm_package_version,
//     integrations: [new BrowserTracing()],

//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 0.05,
//   });
// }
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AppProvider //Fix this Later
    i18n={{}}
  >
    <Suspense>
      <App />
    </Suspense>
  </AppProvider>
);

