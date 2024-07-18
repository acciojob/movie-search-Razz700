
import React, { useState } from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  const [val,setval]=useState('');
  const [data,setdata]=useState(null);
  const [err,seterr]=useState(false);
  const [render,setrender]=useState(false);
  const handleinput=(e)=>{
    const v1=e.target.value;
    setval(v1);
  }
  const enter=(e)=>{
    //e.preventDefault();
if (e.key=='Enter') {
  handlesearch(e);
}
  }
  const handlesearch=(e)=>{
    e.preventDefault();
    console.log('serch',val);
    axios.request(`http://www.omdbapi.com/?t=${val}&apikey=99eb9fd1`).then((res)=>{
      console.log(res.data,res.data.Response);
      setdata(res.data);
      if (res.data.Response=="True") {
        setrender(true);
        seterr(false);
      }else{
        seterr(true);
        setrender(false);
      }
    }).catch((e)=>{
      console.log(e);
    })
  }
  return (
    <div>
        <h2>Search Movie</h2>
    <form>
    <input value={val} onKeyDown={enter} onChange={handleinput} type="text" placeholder="Enter a Movie name" />
    <button onClick={handlesearch}>Search</button>
    </form>
     <ul>
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     {render && <li> <h2>{data.Title}</h2>
     <img src={data.Poster} alt="Image" /></li>}
     </ul>
      {err && <div className="error">Invalid movie name. Please try again.</div>}
       {/* Do not remove the main div */}
    </div>
  )
}

export default App
