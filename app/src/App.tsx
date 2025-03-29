import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {

  return (
    <>
        <HelmetProvider>
          <Helmet titleTemplate='%s | mentoria.dev' />
          <RouterProvider router={router} />
        </HelmetProvider>
    </>
  )
}

export default App
