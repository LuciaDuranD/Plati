import { RouterProvider } from 'react-router';
import { useEffect } from 'react';
import { router } from './routes';

export default function App() {
  useEffect(() => {
    document.documentElement.lang = "es";
    document.title = "PLATI";
  }, []);

  return <RouterProvider router={router} />;
}
