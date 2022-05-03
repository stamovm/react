import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import './index.css'
import store from './store'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
)
