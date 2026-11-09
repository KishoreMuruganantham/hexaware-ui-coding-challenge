import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
createRoot(document.getElementById('root')).render(

  // Store is registered for this App
  // basename is needed only when hosted under a sub path (GitHub Pages)
  <BrowserRouter basename={import.meta.env.DEV ? "/" : "/object-dashboard"}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

)
