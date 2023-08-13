import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Photocategory(props) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch_RingtoneCategory();
    }, []);

    const fetch_RingtoneCategory = async () => {
        try {
            const response = await axios.get('photocatagorys/');
            setCategory(response.data);
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='container-fluid'>
          
            {category.map((data, id) => (
                <Link
                    key={id}
                    className='container con1'
                    to="/Gridimages"
                    state={{data:data}}
                >
                    <h1 className='title'>{data.photo}</h1>
                    <div>
                        <img className='k_img' src={data.image} alt={data.photo} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Photocategory;

