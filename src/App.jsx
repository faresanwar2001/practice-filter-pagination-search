import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Login from './components/auth/Login'
import Courses from './(homePage)/Courses/Courses'
import CourseDetails from './components/courseDetails/CourseDetails'
import CourseContextProvider from './context/CourseContext'

function App() {
  const route = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true, element:<Courses/>},
      {path:"CourseDetails/:id", element:<CourseDetails/>},
    ]},
    {path:"/login",element:<Login/>}
  ])

  return (
    <CourseContextProvider>
      <RouterProvider router={route}>
      </RouterProvider>
    </CourseContextProvider>
  )
}

export default App
