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

  useEffect( () => {
    fetch('https://api.github.com/users/flborrelli')
    .then(responseFromAPI => responseFromAPI.json())
    .then(data => {
      setData(data)
    })
  } , [])

  const setData = ({ name, login, public_repos, avatar_url, bio, location }) => {
    setName(name);
    setUsername(login);
    setAvatar(avatar_url);
    setRepositories(public_repos);
    setBio(bio);
    setLocation(location);
  }

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
