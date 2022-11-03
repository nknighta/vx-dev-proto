import { Analytics } from '@vercel/analytics/react';
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
