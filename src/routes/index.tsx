import { Suspense, LazyExoticComponent, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import PATHS from './paths'

// Utility component to wrap lazy-loaded components
interface LazyComponentProps {
  Component: LazyExoticComponent<React.FC<object>>
  fallback?: React.ReactNode
}

function LazyLoader({ Component, fallback }: LazyComponentProps) {
  return (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

// Lazy-loaded components
// const Layout = lazy(() => import('@layouts/MainLayout'))
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Inputs = lazy(() => import('@pages/Inputs'))
const Skills = lazy(() => import('@pages/Skills'))
const Html = lazy(() => import('@pages/Skills/Html'))
const Css = lazy(() => import('@pages/Skills/Css'))
const Javascript = lazy(() => import('@pages/Skills/Javascript'))
const Ecmascript = lazy(() => import('@pages/Skills/ES'))
const Closures = lazy(() => import('@pages/Skills/Closures'))
const FormValidations = lazy(() => import('@pages/Skills/FormValidations'))

// Learning Java App components
const Dashboard = lazy(() => import('@pages/LearningJavaApp/Dashboard'))
const Employee = lazy(() => import('@pages/LearningJavaApp/EmployeeTable'))

export default function Router() {
  return useRoutes([
    { path: PATHS.HOME, element: <LazyLoader Component={Home} /> },
    { path: PATHS.ABOUT, element: <LazyLoader Component={About} /> },
    { path: PATHS.INPUTS, element: <LazyLoader Component={Inputs} /> },
    {
      path: PATHS.SKILLS,
      element: <LazyLoader Component={Skills} />,
      children: [
        { path: PATHS.HTML, element: <LazyLoader Component={Html} /> },
        { path: PATHS.CSS, element: <LazyLoader Component={Css} /> },
        { path: PATHS.JS, element: <LazyLoader Component={Javascript} /> },
        { path: PATHS.ES, element: <LazyLoader Component={Ecmascript} /> },
        { path: PATHS.CLOSURES, element: <LazyLoader Component={Closures} /> },
        { path: PATHS.FORM_VALIDATIONS, element: <LazyLoader Component={FormValidations} /> },
      ],
    },
    {
      path: PATHS.LEARNING,
      element: <LazyLoader Component={Dashboard} />,
      children: [
        {
          path: PATHS.EMPLOYEE,
          element: <Employee />,
        },
      ],
    },
  ])
}
