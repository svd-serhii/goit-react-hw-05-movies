import Navbar from 'components/Menu/Menu';
import UserRoutes from 'UserRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <UserRoutes />
        <ToastContainer autoClose={2500} theme="colored" />
      </main>
    </>
  );
};
