import LogIn from './LogIn';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn/>,
    },
    {
      path: "/browse",
      element: <Browse/>,
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;