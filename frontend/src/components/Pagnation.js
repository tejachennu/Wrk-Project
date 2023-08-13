import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import Pins from './Pins';


function Pagination({ category_id, category }) {
  const [categories, setCategories] = useState({});
  const [pagedata, setPagedata] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('photos/');

      const newCategories = {};

      response.data.forEach((data) => {
        const categoryId = data.category;
        if (!newCategories[categoryId]) {
          newCategories[categoryId] = [];
        }
        newCategories[categoryId].push(data);
      });

      setCategories(newCategories);

      if (newCategories[category]) {
        setPagedata(newCategories[category].slice(0, category_id-3));
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (<>
   
        <div style={styles.pin_continer}>
          {
            pagedata ?[...pagedata].reverse().map((data,id)=>(
                <Pins data={data} />
            )) : (<h1>server down</h1>)
           }
                         
        </div>
             


         </>)
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

export default Pagination;
