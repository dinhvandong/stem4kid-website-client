import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 w-[500px]"
      />
      <button className="absolute inset-y-0 right-0 px-3 flex items-center bg-gray-200 text-gray-600 rounded-r-lg">
        <div>
          <FaSearch />
        </div>
      </button>
    </div>
  );
};

export default SearchInput;
