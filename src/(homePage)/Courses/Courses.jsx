import { useContext, useState } from "react";
import DialogEdit from "../../lib/common/edit-dialog";
import { Link } from "react-router-dom";
import { CourseContext } from "../../context/CourseContext";
import FilterProducts from "../../lib/common/filter-products";
import Sidebar from "../../lib/common/sidebar";
export default function Courses() {
  // Context
  const { courses, setCourses } = useContext(CourseContext);

  // State
  const [search, setSearch] = useState("");

  return (
    <section class="flex justify-between gap-80">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Table */}
      <div className="grow px-7">
        <div className="my-8 border-b border-gray-400 pb-3 flex gap-20 items-center">
          {/* Filter */}
          <FilterProducts />
 
          {/* Search */}
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search items......"
            className="border border-gray-500 rounded-md grow p-3 focus:outline-blue-500"
          />
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Color
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Details</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {courses
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.courseName.toLowerCase().includes(search);
                })
                .map((course) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={course.image}
                        alt={course.courseName}
                        className="w-30 h-30"
                      />
                    </th>
                    <td class="px-6 py-4">{course.courseName}</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">{course.price}</td>

                    <td class="px-6 py-4">{course.price}$</td>

                    <td class="px-6 py-4 text-right">
                      <Link
                        to={`/courseDetails/${course.id}`}
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
