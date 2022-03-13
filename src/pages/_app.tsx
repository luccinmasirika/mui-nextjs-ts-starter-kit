import withDarkMode from 'next-dark-mode'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import Store from '../store'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

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
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default withDarkMode(MyApp)
