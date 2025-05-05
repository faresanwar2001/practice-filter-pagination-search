import { useContext, useEffect, useState } from "react"
import { CourseContext } from "../../context/CourseContext"
import { Funnel } from "lucide-react"
import DialogEdit from "./edit-dialog";
import { Link } from "react-router-dom";

export default function FilterProducts(){
    // Context
    const {courses} = useContext(CourseContext)
    console.log(courses);
    // State
    const [filterAllProducts, setFilterProducts] = useState([])

    useEffect(() => {
        setFilterProducts(courses);
      }, [courses]);
    

    // Functions
    function filterProducts(){
        const results = courses.filter((item)=> item.price > 5000)
        setFilterProducts(results)
        console.log(results);
        
    }

    return<div className="my-8">
     {/* Filter */}
     <button
      onClick={() => console.log(filterProducts())}
      className="bg-blue-950 py-3 px-5 font-semibold rounded-md text-white flex gap-3 cursor-pointer">Products more than 9000$  <Funnel/></button>

      <div className="grid grid-cols-1 gap-5">
              {filterAllProducts.map((course)=><div key={course.id} className="flex justify-between items-center">
              <Link to={`CourseDetails/${course.id}`}>
                {/* Building image */}
                <div className="flex items-center gap-x-6">
                  <img src={course.image} alt={course.courseName} className="h-30 w-30"/>
      
                  <div>
                    {/* Course Name */}
                  <h2 className="font-bold text-slate-950">{course.courseName}</h2>
      
                  {/* Course Description */}
                  <p>{course.courseDes}</p>
                  </div>
                   
                </div>
      
               
      
                  </Link>
                {/* Edit */}
                <div className="flex flex-col gap-3">
                  {/* Price */}
                  <p className="font-medium">{course.price} $</p>
                  <div className="flex gap-x-2">
                    {/* Dialog edit */}
                  <DialogEdit item={course}/>
                      <button
                        onClick={()=> setCourses(courses.splice(course.id)) }
                          className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 rounded-lg cursor-pointer"
                        >
                          Remove item
                        </button>
      
                  </div>
                     
                      </div>
      
                     
              </div>)}
             </div>
    </div>
}