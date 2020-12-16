import React from 'react';
import './App.css';
import Header from './componetns/Header/Header.jsx';
import Navbar from './componetns/Navbar/Navbar.jsx';
import Profile from './componetns/Profile/Profile.jsx';
import Dialogs from './componetns/Dialogs/Dialogs.jsx';
import Music from './componetns/Music/Music.jsx';
import Settings from './componetns/Settings/Settings.jsx';
import News from './componetns/News/News.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content '>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

