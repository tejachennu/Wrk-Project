import React from 'react';
import whatsapp from '../images/whatsapp.png'
import instgram from '../images/instagram.png'
import krishna from '../images/krishna.png'
import users from '../images/users.png'

function Nav() {

    return (
        <>
        <div className='down_nav'>
           
        <div className='nav-img'>
            <img  className='img_krishna' src={krishna} alt="Image Description" />
         </div>
         <div className='nav-img'>
            <img className='imgs' src={instgram} alt='whatsapplogo'/>
         </div>
         <div className='nav-img'>
         <img className='imgs' src={whatsapp} alt='instagram'/>
         </div>
         <div className='nav-img'>
         <img className='imgs'  src={users} alt='profile'/>
         </div>

        </div>
       

        </>
    )
}

export default Nav