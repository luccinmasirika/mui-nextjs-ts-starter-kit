/**
 * @author [Luccin Masirika]
 * @email [luccinmasirika@gmail.com]
 * @create date 2022-02-09 17:17:19
 * @modify date 2022-02-09 17:17:19
 * @desc [description]
 */

import withDarkMode from 'next-dark-mode'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import Store from '../store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <NextNprogress
        color="#0179bb"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ easing: 'ease', speed: 500 }}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default withDarkMode(MyApp)
