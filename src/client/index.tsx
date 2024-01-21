import React from 'react';
import ReactDOM from "react-dom/client";
import { AppProvider } from '@shopify/polaris';
import Suspense from '../components/Suspense';
import App from '../App';
import '@shopify/polaris/build/esm/styles.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Spinner from '../components/Spinner';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AppProvider //Fix this Later
    i18n={{}}
  >
    <ErrorBoundary>
      <Suspense fallback={<Spinner size='large'/>}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </AppProvider>
);

