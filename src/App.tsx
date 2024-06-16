import { MainPage } from "./page/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from "./page/LoginPage/LoginPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
])
return(
  <>
  <div className="App">
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  </div>
  </>
  );
}


export default App;

