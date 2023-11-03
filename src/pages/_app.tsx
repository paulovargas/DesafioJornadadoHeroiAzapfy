import { HeroProvider } from '../context/HeroContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <HeroProvider>
      <Component {...pageProps} className="container"/>
    </HeroProvider>
  );
}

export default MyApp;
