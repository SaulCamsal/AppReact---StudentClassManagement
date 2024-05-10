import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StudentView } from './components/publicAccess/StudentView.tsx'
import { Classes } from './components/classes/Classes.tsx'
import { Suscription } from './components/suscriptions/Suscriptions.tsx'
import { Students } from './components/students/Students.tsx'
import { RootLayout } from './routes/RootLayout.tsx'

const routerConfig = createBrowserRouter([
  {path: "/", element:<RootLayout />, children:[
    {path: "/", element: <App />},
    {path: "/classes", element: <Classes/>},
    {path: "/studentView", element: <StudentView />},
    {path: "/students", element: <Students/>},
    {path: "/suscriptions", element:<Suscription/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}/>
  </React.StrictMode>,
)
