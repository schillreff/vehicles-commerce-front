import { Toaster } from 'react-hot-toast';
import { GlobalProvider } from './contexts';
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
    </GlobalProvider>
  );
}

export default App;
