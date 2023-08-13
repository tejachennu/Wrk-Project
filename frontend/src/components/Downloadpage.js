import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Gridimages from "./Gridimages";
import Pagnation from "./Pagnation";




function Downloadpage(){

    const location=useLocation()
    const data=location.state.data



    return(<> 
           <div className="download_screen">

            <img className="" style={{width:"100%"}} src={data.image}/>
            <div className="down_inf">
               <div className="container">
               <h1>{data.name}</h1>
               <p className="paragraph">uyguygdsfgf yaulGFl LIAHFl lisgf ilgsfcfjxfjx fg ghjy jy jdrut yru r </p>
               </div>
             <a className="atag" href={data.image} download >Download</a>   
            </div>
            
            <Pagnation category_id={data.id} category={data.category}/>
            
        </div>

    </>)
}

const styles={
    
}



export default Downloadpage