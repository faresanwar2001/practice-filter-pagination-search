import { useContext } from "react";
import DialogEdit from "../../lib/common/edit-dialog";
import { Link } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import { Funnel } from "lucide-react";
export default function Courses() {
  // Context
  const {courses, setCourses, originalCourses} =useContext(CourseContext)

  // Functions
  function filterProducts(){
    const result = courses.filter((item)=>item.price > 5000)
    setCourses(result)
  }
  
  function showAllProducts(){
    setCourses(originalCourses)
  }

  return (
      <section class="container mx-auto">
         {/* Filter */}
         <div className="flex gap-4 my-3 border-b border-gray-400 pb-3 ">
         <button
              onClick={() => showAllProducts()}
              className="bg-blue-950 py-3 px-5 font-semibold rounded-md text-white flex gap-3 cursor-pointer">All Products  <Funnel/></button>

             <button
              onClick={() => filterProducts()}
              className="bg-blue-950 py-3 px-5 font-semibold rounded-md text-white flex gap-3 cursor-pointer">Products more than 9000$ <Funnel/></button>
         </div>
            

       <div className="grid grid-cols-1 gap-5">
        {courses.map((course)=><div key={course.id} className="flex justify-between items-center">
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
       
      </section>
  );
}
