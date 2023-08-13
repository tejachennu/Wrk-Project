import * as React from 'react';
import { Link } from 'react-router-dom';

function Pins(props){
    
    return (
        <Link to='/Downloadpage' state={{data:props.data}}  style={{...styles.pin,
                     ...styles[props.data.size]             
                                  }}>
                                  <img style={{...styles.img_box}} src={props.data.image}/> 
        </Link>
    )
}
const styles={
    pin:{
        margin:'15px 10px',
        padding:'0%',
        borderRadius:'16px',
        backgroundColor:'balack',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    sm:{
        gridRowEnd:'span 26'
    },
    md:{
        gridRowEnd:'span 33'
    },
    lg:{
        gridRowEnd:'span 36'
    },
    img_box:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '16px',
    }
    }

export default Pins