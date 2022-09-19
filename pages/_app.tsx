import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-['DM_Sans']">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
