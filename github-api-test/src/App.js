import React, { useState, useEffect } from "react";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import UserCard from "./components/UserCard";
import SearchForm from "./components/SearchForm";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [reposURL, setReposURL] = useState(
    "https://api.github.com/users/example/repos"
  );
  const [numberOfRepositories, setNumberOfRepositories] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showReposFlag, setShowReposFlag] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [hideButton, setHideButton] = useState(false);

  const rootAPI_URL = "https://api.github.com/users/example";
  const userAPI_URL = `https://api.github.com/users/${userInput}`;
  const reposAPI_URL = `https://api.github.com/users/${username}/repos`;

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
    setReposURL(repos_url);
    setBio(bio);
    setLocation(location);
  };

  //Get data from API
  const getDataFromAPI = () => {
    setLoader(true);
    fetch(rootAPI_URL)
      .then(responseFromAPI => responseFromAPI.json())
      .then(data => {
        setData(data);
        setLoader(false);
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

  const handleSubmit = event => {
    event.preventDefault();
    setShowReposFlag(false);
    fetch(userAPI_URL)
      .then(responseFromAPI => responseFromAPI.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          getReposFromAPI();
          setData(data);
          setError(null);
        }
      })
      .catch(err => {
        console.log("There is an Error while submiting");
      });
  };

  //Get Repositories from API
  const getReposFromAPI = () => {
    fetch(reposAPI_URL)
      .then(responseFromAPI => responseFromAPI.json())
      .then(repos => {
        setRepositories(repos);
      })
      .catch(err => {
        console.log("There is an Error while submiting");
      });
  };

  const showReposButton = event => {
    event.preventDefault();
    getReposFromAPI();
    setShowReposFlag(!showReposFlag);
  };

  return (
    <div>
      <div>
        {
          name !== "" ? (
          <div>
            <MyNavbar />
            <div className="d-flex flex-column align-items-center ml-5 mt-4">
              <div>
                <SearchForm
                  getUserInput={handleSearch}
                  getSubmit={handleSubmit}
                />
              </div>
              
              <UserCard
                getName={name}
                getUsername={username}
                getNumberOfRepositories={numberOfRepositories}
                getBio={bio}
                getLocation={location}
                getAvatar={avatar}
                reposButton={showReposButton}
                reposFlag={showReposFlag}
                getReposArr={repositories}
                getError={error}
              />
              
            </div>
          </div>
        ) : (
          <Segment>
            <Dimmer active>
              <Loader />
            </Dimmer>
            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}
      </div>
    </div>
  );
}
export default App;
