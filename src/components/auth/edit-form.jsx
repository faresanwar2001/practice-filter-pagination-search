import { useForm } from "react-hook-form"

export default function EditForm({items}){

    // Form & Validation
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: items ?? {
            courseName:"",
            price:"",
            courseDes:"",
            image:"",
        }
    })

    const onSubmit = (values) =>{
       const update = values
        setValue("values", update)
    }
    

    return<form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center my-3">
                {/* Course image */}
                <img src={items.image} alt={items.courseName} className="w-40 h-40 rounded-full" />
            </div>

            <div className="flex flex-col gap-6">
            {/* Course name */}
            <input type="text" {...register("courseName")} placeholder="Course Name" className="border border-gray-200 rounded-md p-3 focus:outline-blue-200 focus:shadow-blue-300 placeholder:font-semibold"/>

            {/* Course description */}
            <input type="text"  {...register("price")}  placeholder="Course Description" className="border border-gray-200 rounded-md p-3 focus:outline-blue-200 focus:shadow-blue-300 placeholder:font-semibold"/>

            {/* Course price */}
            <input type="text" {...register("courseDes")} placeholder="Course price" className="border border-gray-200 rounded-md p-3 focus:outline-blue-200 focus:shadow-blue-300 placeholder:font-semibold"/>

            {/* Edit button */}
            <button className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-400 font-bold cursor-pointer">Edit Course</button>
            </div>
    </form>
}