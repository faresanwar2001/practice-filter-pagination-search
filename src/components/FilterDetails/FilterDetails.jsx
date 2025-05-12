export default function FilterDetails(){

    return<>
    <div key={course.id} className="flex justify-between items-center">
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

               
        </div>
    </>
}