import { useContext, useEffect, useState } from "react"
import { CourseContext } from "../../context/CourseContext"
import { Funnel } from "lucide-react"
import DialogEdit from "./edit-dialog";
import { Link } from "react-router-dom";

export default function FilterProducts(){
  const {courses, setCourses, originalCourses} =useContext(CourseContext)

  // Functions
  function filterProducts(){
    const result = courses.filter((item)=>item.price > 5000)
    setCourses(result)
  }
  
  function showAllProducts(){
    setCourses(originalCourses)
  }
    return<>
     {/* Filter */}
     <div className="flex gap-4 my-3">
         <button
              onClick={() => showAllProducts()}
              className="bg-blue-950 py-3 px-5 font-semibold rounded-md text-white flex gap-3 cursor-pointer">All Products  <Funnel/></button>

             <button
              onClick={() => filterProducts()}
              className="bg-blue-950 py-3 px-5 font-semibold rounded-md text-white flex gap-3 cursor-pointer">Products more than 9000$ <Funnel/></button>
         </div>
    </>
}