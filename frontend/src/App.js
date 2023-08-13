import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
import axios from 'axios';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav'
import Homescreen from './components/Homescreen';
import Gridimages from './components/Gridimages';
import Photocategory from './components/Photocategory';
import Downloadpage from './components/Downloadpage'
import Pagnation from './components/Pagnation';
import RingtonesCategory from './components/ringtones/RingtonesCategory';
import Ringtones from './components/ringtones/Ringtones';





function App() {

  const [data, setData] = useState([]); // Use useState to manage state
 useEffect(()=>{
  fetchdata()
 },[])
  const fetchdata = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/photos/');
      setData(response.data);
      console.log(response.data)
      console.log('hello')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  


  return (

       <Router>

       <div className='home_page'>

          
          <Routes>
           
            <Route path='Downloadpage' element={<Downloadpage/>}/>
            <Route path='/Photocategory' element={<Photocategory/>}/>
            <Route path='/' element={< Homescreen/>}/>
            <Route path='/Gridimages' element={<Gridimages/>}/>
            <Route path='/Pagnation' element={<Pagnation/>}/>
            <Route path='/RingtonesCategory' element={<RingtonesCategory/>}/>
            <Route path='/Ringtones' element={<Ringtones/>}/>
          </Routes>

           <Nav/>

</div>


       </Router>
      

    

      

  )
}

export default App;