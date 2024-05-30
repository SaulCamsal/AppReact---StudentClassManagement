import { BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';


/*const routerConfig = createBrowserRouter([
  {path: "/", element:<RootLayout />, children:[
    {path: "/", element: <App />},
    ]
  } 
])*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CssBaseline/>
    <App/>
  </BrowserRouter>,
)
