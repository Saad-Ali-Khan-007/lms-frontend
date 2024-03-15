import React, { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";

export default function RatingModal({ CourseDetail }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="flex items-center justify-center w-full p-3 mr-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
      >
        Rate Course
      </button>

      {modal && (
        <div className="modal ">
          <div
            onClick={toggleModal}
            className="h-screen w-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"
          ></div>
          <div className="absolute top-[40%] left-[40%] bg-white w-[20%] h-fit p-4 rounded-lg max-sm:w-[70%] max-sm:left-12 max-md:w-[50%] max-md:left-44 ">
            <p className="text-black text-xl font-semibold">Place Your Bid</p>
            <p className="mt-4 text-black text-base font-medium">Amount</p>
            <div className="relative">
              <input
                type="text"
                placeholder="2648"
                className="rounded-md p-2 border mt-2 w-[90%] bg-slate-300 border-black pl-[3rem]"
              />

              <AiOutlineDollar className="h-6 w-6 text-black absolute top-[1.1rem] left-[1rem]" />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={toggleModal}
                className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-sm"
              >
                Cancel
              </button>
              <button className="bg-orange-400 text-white w-[100%] p-2 text-lg mt-4 rounded-sm">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
