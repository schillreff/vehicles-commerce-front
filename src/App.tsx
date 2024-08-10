import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './styles/global';
import { ResetStyle } from './styles/reset';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
