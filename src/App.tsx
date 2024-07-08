import { MainPage } from "./page/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from "./page/LoginPage/LoginPage";
import FavoritsPage from "./page/FavoritsPage/FavoritsPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<LoginPage/>
    },
    {
      path:"/MainPage",
      element:<MainPage/>
    },
    {
      path:"/favorite",
      element:<FavoritsPage/>
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

