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

export default function Router() {
  return useRoutes([
    // {
    //     path: '/dashboard',
    //     element: <LazyComponent component={Layout} />, // Wrap dashboard inside a layout
    //     children: [
    //       { path: '', element: <LazyComponent component={Dashboard} /> },
    //       { path: 'profile', element: <LazyComponent component={Profile} /> },
    //     ],
    //   },
    { path: '/', element: <LazyLoader Component={Home} /> },
    { path: '/about', element: <LazyLoader Component={About} /> },
  ])
}
