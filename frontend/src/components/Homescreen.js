import React from 'react';
import k1 from '../images/lordkrishna1.png'
import k2 from '../images/lordkrishna2.png'
import k3 from '../images/lordkrishna3.png'
import { Link } from 'react-router-dom';
function Homescreen() {

    

    return (
        <>
        <div className=' container-fluid'>

             
               <Link  className='container con1' to='/Photocategory'>
                 <h1 className='title'>Wallpapers</h1>
                  <div >
                    <img className='k_img' src={k1} />
                  </div>

               </Link>
              
            

             <Link className=' container con2' to='/RingtonesCategory'>
             
               <h1 className='title'>Ringtones</h1>
                  <div >
                    <img className='k_img' src={k2}/>
               </div>
            </Link>

         
            
        </div>

        </>
    )
}

export default Homescreen