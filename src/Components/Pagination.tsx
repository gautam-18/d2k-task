import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = ({
  dataLength,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(dataLength / itemsPerPage);
  return (
    <div className="flex justify-end mt-4 items-center gap-2 ">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-3 px-5 border bg-transparent ${
          currentPage === 1
            ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            : "border-gray-500 hover:bg-gray-300 text-black"
        } rounded-md`}
      >
        <IoIosArrowBack />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (pageNumber) =>
          pageNumber - currentPage < 5 &&
          pageNumber - currentPage >= 0 && (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`p-2 px-5 border bg-transparent ${
                currentPage === pageNumber
                  ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  : "border-gray-500 hover:bg-gray-300 text-black"
              } rounded-md`}
            >
              {pageNumber}
            </button>
          )
      )}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-3 px-5 border bg-transparent ${
          currentPage === totalPages
            ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            : "border-gray-500 hover:bg-gray-300 text-black"
        } rounded-md`}
      >
        <IoIosArrowBack className="scale-x-[-1]" />
      </button>
    </div>
  );
};

export default Pagination;
