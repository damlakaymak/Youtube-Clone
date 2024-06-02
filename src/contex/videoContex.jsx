import { Children, createContext, useEffect, useState } from "react";
import { categories } from "../constansts";

import api from "../uitls/api";


export const VideoContex = createContext()
export const VideoProvider = ({children })=>{

const [selectedCategory, setSelectedCategory] = useState(categories[0]);
const [isLoading,setIsLoading] = useState(true);
const [videos,setVideos]= useState();
const [error,setError] = useState(null);



useEffect(()=>{

const type = selectedCategory.type

if(type === "menu") return;
setIsLoading(true);

const url = type === "home" ? "/home"
: type === "trending" ? "/trending" : 
type === "category" ?
`/search?query= ${selectedCategory.name}` :
"";

api.get(url).then((res)=> {setVideos(res.data.data)
setError(null)})
.catch((err)=> setError(err.message))
.finally(()=>setIsLoading(false))



},[selectedCategory])

return <VideoContex.Provider value={{selectedCategory, setSelectedCategory,error,isLoading,videos}}>{children}</VideoContex.Provider>

}