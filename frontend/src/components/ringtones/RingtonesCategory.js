import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function RingtonesCategory(props) {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch_RingtoneCategory();
    }, []);

    const fetch_RingtoneCategory = async () => {
        try {
            const response = await axios.get('Ringtonescategory/');
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
                    to="/Ringtones"
                    state={{data:data}}
                >
                    <h1 className='title'>{data.ringtone_category}</h1>
                    <div>
                        <img className='k_img' src={data.image} alt={data.ringtone_category} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default RingtonesCategory;