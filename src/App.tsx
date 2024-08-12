import { Toaster } from 'react-hot-toast';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { GlobalProvider } from './contexts';
import { RoutesMain } from './routes';
import { GlobalStyle } from './styles/global';
import { ResetStyle } from './styles/reset';

function App() {
  return (
    <GlobalProvider>
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            background: '#0B0D0D',
            color: 'white',
          },
        }}
      />
      <GlobalStyle />
      <ResetStyle />
      <Section>
        <RoutesMain />
      </Section>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
