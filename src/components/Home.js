import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [data, setData] = useState([]);
  const getInformation = async()=>{
    const info  = await axios.get('https://api.tvmaze.com/search/shows?q=all')
    setData(info.data)
  }
  useEffect(() => {
    return () => {
      getInformation()
    };
  }, []);
  console.log(data)
  
  
  return (
    <div className="h-[100%]">
      <div className="px-5 py-3 bg-slate-300">
        <p className="font-mono font-bold text-2xl">QuadB</p>
      </div>
      <div className=" flex justify-center items-center h-[100%] bg-slate-100">
        
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 my-5 mx-5 ">{data.map((d)=>{
            return (
              <Link to={`/${d.show.id}`}>
            <div key={d.show.id} className="flex flex-col shadow-xl px-5 rounded-xl hover:scale-105 cursor-pointer">
              <img src={d.show.image.medium}  alt="alt"></img>
              {console.log(d)}
              <p className="font-bold text-center mt-auto">{d.show.name}</p>
              <p className="flex flex-row my-2"><p className="font-semibold">Language</p>: {d.show.language}</p>
              <p className="flex flex-row my-2"><p className="font-semibold">Genre</p>:&nbsp; {d.show.genres.map((d)=>(<p>{d}&nbsp;</p>))}</p>
            </div>
            </Link>
            )
          })}</div>
        
      </div>
    </div>
  );
}

export default Home;
