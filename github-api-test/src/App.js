import React, { useState, useEffect } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [respositories, setRepositories] = useState('');
  const [numberOfRepositories, setNumberOfRepositories] = useState([]);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [allData, setAllData] = useState({});
  const [userInput, setUserInput] = useState('');


  const getDataFromAPI = () => {
    fetch("https://api.github.com/users/example")
      .then(responseFromAPI => responseFromAPI.json())
      .then(data => {
        setData(data);
        setAllData(data)
      })
      .catch(err => {
        throw new err();
      });
  };

  const setData = ({
    name,
    login,
    public_repos,
    avatar_url,
    bio,
    location
  }) => {
    setName(name);
    setUsername(login);
    setAvatar(avatar_url);
    setNumberOfRepositories(public_repos);
    setBio(bio);
    setLocation(location);
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const handleSearch = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(responseFromAPI => responseFromAPI.json())
    .then(newData => {
      setData(newData)
      setAllData(newData)
  console.log('look', allData)
})
    .catch(err => {
      console.log('There is an Error while submiting')
    })
  }

  console.log(allData)
  console.log(userInput)
  console.log(allData)

  return (
    <>
      <MyNavbar />
      <div className="d-flex flex-column align-items-center mt-5">
        <div>
          <SearchForm getUserInput={handleSearch} getSubmit={handleSubmit}/>
        </div>
        <UserCard
          getName={name}
          getUsername={username}
          getRepositories={numberOfRepositories}
          getBio={bio}
          getLocation={location}
          getAvatar={avatar}
        />
      </div>
    </>
  );
}
export default App;
