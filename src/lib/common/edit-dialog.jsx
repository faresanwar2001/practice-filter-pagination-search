import { useState } from "react";
import EditForm from "../../components/auth/edit-form";

export default function DialogEdit({ item }) {
  // State
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg cursor-pointer w-full"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold">{item.courseName}</h3>
              <button className="cursor-pointer" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="mt-4 space-y-3 text-gray-600">
              <EditForm items={item}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
