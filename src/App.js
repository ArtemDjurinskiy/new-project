import React from 'react';
import './App.css';
import Header from './componetns/Header/Header.jsx';
import Navbar from './componetns/Navbar/Navbar.jsx';
import Profile from './componetns/Profile/Profile.jsx';
import Dialogs from './componetns/Dialogs/Dialogs.jsx';
const App = () => {
  return ( 
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      {/* <Profile/> */}
      <div className='app-wrapper-content '>
        <Dialogs/>
      </div>
    </div>
  );
} 


export default App;

