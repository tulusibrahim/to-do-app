import Body from './components/body';
import Header from './components/header';
import { ChakraProvider } from "@chakra-ui/react"
import Footer from './components/footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Body />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
