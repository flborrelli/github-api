import React, { useState, useEffect } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [reposURL, setReposURL] = useState("https://api.github.com/users/example/repos");
  const [numberOfRepositories, setNumberOfRepositories] = useState([]);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [userInput, setUserInput] = useState("");

  const api_URL = 'https://api.github.com/users/example';

  const setData = ({
    name,
    login,
    public_repos,
    repos_url,
    avatar_url,
    bio,
    location
  }) => {
    setName(name);
    setUsername(login);
    setAvatar(avatar_url);
    setNumberOfRepositories(public_repos);
    setReposURL(repos_url)
    setBio(bio);
    setLocation(location);
    
  };

  //Get data from API
  const getDataFromAPI = () => {
    fetch(api_URL)
      .then(responseFromAPI => responseFromAPI.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        throw new err();
      });
  };



  useEffect(() => {
    getDataFromAPI();
  }, []);

  //Search and Submit functions
  const handleSearch = event => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then(responseFromAPI => responseFromAPI.json())
      .then(newData => {
        getReposFromAPI()
        setData(newData);
      })
      .catch(err => {
        console.log("There is an Error while submiting");
      });
  };

  //Get Repositories from API
  const getReposFromAPI = () => {
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(responseFromAPI => responseFromAPI.json())
      .then(repos => {
        setRepositories(repos);
      })
      .catch(err => {
        console.log("There is an Error while submiting");
      });
  }

  const showReposButton = (event) => {
    event.preventDefault();
    getReposFromAPI();
    console.log('clicked')
  }

  console.log('URL:', reposURL)
  console.log('hello:', repositories);

  return (
    <>
      <MyNavbar />
      <div className="d-flex flex-column align-items-center mt-5">
        <div>
          <SearchForm getUserInput={handleSearch} getSubmit={handleSubmit} />
        </div>
        <UserCard
          getName={name}
          getUsername={username}
          getNumberOfRepositories={numberOfRepositories}
          getBio={bio}
          getLocation={location}
          getAvatar={avatar}
          reposButton={showReposButton}
          getReposArr={repositories}
        />
      </div>
    </>
  );
}
export default App;
