import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@generouted/react-router/lazy'

import 'antd/dist/reset.css'
import './styles/index.css'

import 'virtual:svg-icons-register'

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById(`root`)!).render(<RouterProvider router={router} />)
