import './styles/global.css'
import  Index from './index'
import { ChakraProvider } from "@chakra-ui/react";

function App () {
    return<ChakraProvider>
        <Index/>
    </ChakraProvider>
}

export default App