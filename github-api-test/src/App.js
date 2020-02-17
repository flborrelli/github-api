import React, { useState, useEffect } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import UserCard from './components/UserCard';
import SearchForm from './components/SearchForm';


function App() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');

  return (
    <>
      <MyNavbar/>
      <div className='d-flex flex-column align-items-center mt-5'>
        <div>
        <SearchForm/>
        </div>
        <UserCard/>
      </div>
    </>
  );
}

export default App;
