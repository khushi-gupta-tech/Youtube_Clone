import Head from "./Components/Head";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import {useSelector } from "react-redux";
import History from "./Components/History";
import Demo from "./Components/Demo";
import Demo2 from "./Components/Demo2";
import LivePage from "./Components/LivePage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/demo",
        element: (
          <>
            <Demo /> <Demo2 />
          </>
        ),
      },
      {
        path:'/history',
        element: <History/>
      },
      {
        path:'/live',
        element:<LivePage/>
      }
    ],
  },
]);

function App() {

  const dark = useSelector((store)=> store.dark.dark);

  return (
    <div className={dark?"dark":""}>
      <div className="bg-white dark:bg-black  text-black dark:text-white ">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
     </div>
  );
}

export default App;
