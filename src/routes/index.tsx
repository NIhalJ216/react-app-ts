import { Suspense, LazyExoticComponent, lazy } from 'react'
import { useRoutes } from 'react-router-dom'

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

export default function Router() {
  return useRoutes([
    { path: '/', element: <LazyLoader Component={Home} /> },
    { path: '/about', element: <LazyLoader Component={About} /> },
    { path: '/inputs', element: <LazyLoader Component={Inputs} /> },
    {
      path: '/skills',
      element: <LazyLoader Component={Skills} />,
      children: [
        { path: 'html', element: <LazyLoader Component={Html} /> },
        { path: 'css', element: <LazyLoader Component={Css} /> },
        { path: 'js', element: <LazyLoader Component={Javascript} /> },
        { path: 'es', element: <LazyLoader Component={Ecmascript} /> },
        { path: 'closures', element: <LazyLoader Component={Closures} /> },
        { path: 'form-validations', element: <LazyLoader Component={FormValidations} /> },
      ],
    },
  ])
}
