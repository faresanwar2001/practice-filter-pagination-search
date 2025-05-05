import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import DialogEdit from "../../lib/common/edit-dialog";

export default function CourseDetails() {
  // Navigation
  const { id } = useParams();

  // Context
  const { courses, setCourses } = useContext(CourseContext);

  const course = courses.find((c) => String(c.id) === String(id));

  return (
    <section className="container mx-auto px-20">
        <div key={course.id} className="flex justify-between items-center w-[90%]">
          {/* Building image */}
          <div className="w-[50%]">
            <img
              src={course.image}
              alt={course.courseName}
              className="h-70 w-70"
            />
          </div>

          {/* Edit */}
          <div className="flex flex-col gap-3 grow">
            {/* Course Name */}
            <h2 className="font-bold text-slate-950">{course.courseName}</h2>

            {/* Course Description */}
            <p>{course.courseDes}</p>
            {/* Price */}
            <p className="font-medium">{course.price} $</p>

            <div className="flex flex-col justify-between gap-5 my-4">
               {/* Dialog edit */}
              <DialogEdit item={course}/>

              <button
                onClick={() => setCourses(courses.splice(course.id))}
                className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 rounded-lg cursor-pointer w-full"
              >
                Remove item
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}
