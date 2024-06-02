import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {categories} from "../constansts/index"
import { VideoContex } from "../contex/videoContex";

const Sidebar = () => {

  const {selectedCategory,setSelectedCategory} = useContext(VideoContex);

  return (
    <div  className="flex flex-col p-1 md:p-4">
  {categories.map((item,i)=>(

<Link to={"/"} key={i} onClick={()=>setSelectedCategory(item)}>
<div 


className={`${selectedCategory.name === item.name && "bg-[#2D2D2D]"} flex gap-2 py-4  px-2 md:px-3 items-center md:text-lg cursor-pointer
rounded-md hover:bg-[#2D2D2D]` }
>




  <span className="max-md:text-2xl">
{item.icon}
  </span>
<span className="max-md:hidden line-clamp-1" >{item.name}</span>
</div>

{item.divider && <hr/>}
</Link>


 ) )}
 
    </div>
  );
};

export default Sidebar;
