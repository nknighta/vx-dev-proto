import { Analytics } from '@vercel/analytics/react';
import '@tremor/react/dist/esm/tremor.css';
// program entry point

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
        <Analytics/>
      </>
  )
}

export default MyApp
