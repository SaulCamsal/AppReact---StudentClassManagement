import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


/*const routerConfig = createBrowserRouter([
  {path: "/", element:<RootLayout />, children:[
    {path: "/", element: <App />},
    ]
  } 
])*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
