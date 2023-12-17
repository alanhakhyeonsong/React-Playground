import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RecoilRoot } from 'recoil';
import './index.css'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RecoilRoot>
  );
});
