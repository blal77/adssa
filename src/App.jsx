import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Layout from "./layout/Layout"
import Home from "./home/Home"
import Blog from "./blog/Blog"
import About from "./about/About"
function App() {


const routing = createBrowserRouter([
  {
    path: "",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "home",
        element:<Home/>
      },
      {
        path: "blog",
        element:<Blog/>
      },
      {
        path: "about",
        element:<About/>
      }
    ]
  },
])

  return (
    <>
    <RouterProvider router={routing}/>
    </>
  )
}


export default App
