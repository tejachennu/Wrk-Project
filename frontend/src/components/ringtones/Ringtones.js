import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



function Ringtones(props) {
    
    const [categories, setCategories] = useState({});
    const location=useLocation()
    const clickedData= location.state.data
    const clickedDataId=clickedData.id
    const [filter,setFilter]=useState()
    const [value,setValue]=useState()

    const fetchData = async () => {
        try {
            const response = await axios.get("ringtones/");
          
            const newCategories = {};

            response.data.forEach((data) => {
                const categoryId = data.category;  
                if (!newCategories[categoryId]) {
                    newCategories[categoryId] = [];
                }
                newCategories[categoryId].push(data);
            });

            setCategories(newCategories);
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

   
    return (
      <>
      <div className='song-screen'>
      {categories[clickedDataId]? [...categories[clickedDataId]].reverse().map((data,id)=>(
        <div key={id} className=' song'>

            <div className='song-track'>
                   <h2 className='song-title'>{data.tone_title}</h2>
                   <div className='song-download'>
                        <audio src={data.audio}  controls></audio>
                        <a className='song-link btn btn-danger' href={data.audio}  download><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>Download</a>
                   </div>
                 

                 
            </div>

        </div>
        
        
      )) :<>Loding Data...</>}
      </div>
      </>
    )
}

export default Ringtones;

