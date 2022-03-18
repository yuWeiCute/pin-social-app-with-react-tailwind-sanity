import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();


    return (
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
        <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/work/search')}
            className="p-2 w-full bg-white outline-none"
          />
        </div>
        <div className="flex gap-3 ">


          <Link to="/create-post" 
           className="rounded-lg w-10 h-10 flex justify-center items-center shadow text-white bg-secondaryColor hover:bg-transparent transition-all duration-500 hover:text-secColor font-bold"
          // className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
          >
            <IoMdAdd />
          </Link>
        </div>
      </div>
    );
 

  return null;
};

export default Searchbar;
