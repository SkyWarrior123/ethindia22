import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BlockchainProvider } from './context/BlockchainContext';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <BlockchainProvider>
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
  </BlockchainProvider>
  
)

