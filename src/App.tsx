
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { DigitalSolutionsPage } from './pages/DigitalSolutionsPage'
import { CloudDevOpsPage } from './pages/CloudDevOpsPage'
import { BusinessAutomationPage } from './pages/BusinessAutomationPage'
import { BusinessAdvisoryPage } from './pages/BusinessAdvisoryPage'
import { BusinessDevelopmentManagementPage } from './pages/BusinessDevelopmentManagementPage'
import { ContactPage } from './pages/ContactPage'
import { SectorServicePage } from './pages/SectorServicePage'
import { Home } from './pages/Home'
import { StubPage } from './pages/StubPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services/digital-solutions', element: <DigitalSolutionsPage /> },
      { path: 'services/cloud-devops-services', element: <CloudDevOpsPage /> },
      { path: 'services/business-automation', element: <BusinessAutomationPage /> },
      { path: 'services/business-advisory', element: <BusinessAdvisoryPage /> },
      { path: 'services/business-development-management', element: <BusinessDevelopmentManagementPage /> },
      { path: 'services/academy', element: <SectorServicePage slug="academy" /> },
      { path: 'services/agribusiness', element: <SectorServicePage slug="agribusiness" /> },
      { path: 'services/manufacturing', element: <SectorServicePage slug="manufacturing" /> },
      { path: 'services/import-export', element: <SectorServicePage slug="import-export" /> },
      { path: 'services/:slug', element: <StubPage type="service" /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
