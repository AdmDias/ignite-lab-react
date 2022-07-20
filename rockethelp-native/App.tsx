import { NativeBaseProvider } from 'native-base';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      {/* <Login /> */}
      <Home />
    </NativeBaseProvider>
  );
}
