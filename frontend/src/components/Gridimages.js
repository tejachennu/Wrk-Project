
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Pins from './Pins';
import * as math from 'mathjs'
import { Link } from 'react-router-dom';

function Gridimages(props) {
    
    const [categories, setCategories] = useState({});
    const location=useLocation()
    const clickedData= location.state.data
    const clickedDataId=clickedData.id
   
    

    const fetchData = async () => {
        try {
            const response = await axios.get("photos/");
          
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
    };

    useEffect(() => {
        fetchData();
    }, []);
    
 console.log(categories[clickedDataId],"catagories")
    

    return (
        
        <div style={styles.pin_continer}>
          {
            clickedData && categories[clickedDataId] ? ([...categories[clickedDataId]].reverse().map((data,id)=>(
                <Pins data={data} />
            ))) : (<h1>server down</h1>)
           }
                         
        </div>

              
    )
}
const styles={
    pin_continer:{
        margin:0,
        padding:0,
        width:"100vw",
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,190px)',
        gridAutoRows: 'minmax(10px, auto)',
        gridAutoFlow: 'dense',
        justifyContent:'center',

    }
}
export default Gridimages;