import Navbar from 'components/Menu/Menu';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <UserRoutes />
      </main>
    </>
  );
};
