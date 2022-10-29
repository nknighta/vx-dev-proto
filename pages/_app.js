import './styles/global.css'
import  Main from './index'
import { ChakraProvider } from "@chakra-ui/react";

function App () {
    return<ChakraProvider>
        <Main/>
    </ChakraProvider>
}

export default App