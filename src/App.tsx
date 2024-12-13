
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomeOne from "./components/homes/home";
import Survey from './components/survey/Survey';

const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path : "/survey", element : <Survey /> }
]);

function App() {
  return (
    <> 
      <RouterProvider router={router} />
    </>
  )
}

export default App
