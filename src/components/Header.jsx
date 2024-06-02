import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {

  const navigate = useNavigate();

const handleSubmit = (e) =>{

e.preventDefault();

const text = e.target[0].value;

navigate(`/results?search_query=${text}`)



};

  return (
    <header  className="flex justify-between items-center p-4 ">
      <Link to={"/"} className="flex items-center gap-2 ">
      
      
        <img className="w-[50px]" src="https://th.bing.com/th/id/OIP.OrRMTeV8u3pHmyxhZ0nWYQHaFP?pid=ImgDet&w=203&h=143&c=7" />
        <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
      </Link>

      <form onSubmit={handleSubmit} className="flex group border border-gray-400 rounded-[20px] overflow-hidden">
        <input
        className="bg-black text-white outline-none px-5 py-2 focus:border rounded-l-[20px] focus:border-blue-500 "
        type="text" placeholder="Aramak istediğiniz kelimeyi giriniz" />
        <button className="bg-zinc-800 px-4 text-2xl rounded-r-[20px] hover:bg-gray-800">
          <IoSearchOutline />
        </button>
      </form>

      <div   className="flex text-xl cursor-pointer gap-4 ">
      <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
      <IoVideocam  className="hover:text-gray-400 transition  duration-[250ms]" />
      <MdVideoLibrary  className="hover:text-gray-400  transition duration-[250ms]" />


      </div>
    </header>
  );
};

export default Header;
