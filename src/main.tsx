
import ReactDOM from 'react-dom/client'
import App from './router'
import './index.css'
import { Provider } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
