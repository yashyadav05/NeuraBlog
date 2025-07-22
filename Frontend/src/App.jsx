import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import Layout from "./Pages/Admin/Layout"
import Dashboard from "./Pages/Admin/Dashboard"
import Addblog from "./Pages/Admin/Addblog"
import ListBlog from "./Pages/Admin/ListBlog"
import Comments from "./Pages/Admin/Comments"
import Login from "./Components/Admin/Login"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path="/admin" element={true ? <Layout/> : <Login/>}>
         <Route index element={<Dashboard/>}/>
         <Route path="addBlog" element={<Addblog/>}/>
         <Route path="listBlog" element={<ListBlog/>} />
         <Route path="comments" element={<Comments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
