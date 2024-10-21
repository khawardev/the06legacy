import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotEndorsed } from './pages/notendorsed/NotEndorsed';
import Endorsed from './pages/endorsed/Endorsed';
import { Header } from './components/Header';
import { EndorsedEmailLetter } from './pages/endorsed/EndorsedEmailLetter';
import { NotEndorsedEmailLetter } from './pages/notendorsed/NotEndorsedEmailLetter';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Header />
        <Endorsed />
      </div>,
    },
    {
      path: "/not-endorsed",
      element: <div>
        <Header />
        <NotEndorsed />
      </div>,
    },
    {
      path: "/e-emailletter",
      element: <div>
        <Header />
        <EndorsedEmailLetter />
      </div>,
    },
    {
      path: "/ne-emailletter",
      element: <div>
        <Header />
        <NotEndorsedEmailLetter />
      </div>,
    },
  ],
);
export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}