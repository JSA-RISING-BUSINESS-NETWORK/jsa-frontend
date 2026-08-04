
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { StubPage } from './pages/StubPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services/:slug', element: <StubPage type="service" /> },
      { path: 'contact', element: <StubPage type="contact" /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
