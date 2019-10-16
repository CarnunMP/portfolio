import React, {useState, useEffect} from 'react';
import axios from "axios";
import Profile from "./components/Profile";
import ProjectBox from "./components/ProjectBox"
import './Portfolio.css';
import HomeButton from './components/HomeButton';

function Portfolio() {
  const [{profilePic, name, contactInfo, bio, artefacts}, setProfile] = useState({
    profilePic: "",
    name: "",
    contactInfo: {
      email: "",
    },
    bio: "",
    artefacts: {
      twitterIcon: "",
      githubIcon: "",
      linkedinIcon: "",
    },
  });

  useEffect(() => {
    const githubPromise = axios.get("https://api.github.com/users/carnunmp");
    
    Promise.all([githubPromise])
      .then(([githubResponse]) => {
        setProfile({
          profilePic: githubResponse.data.avatar_url,
          name: "Carnun Marcus-Page",
          contactInfo: {
            email: "carnunmp.lambdaschool@gmail.com",
          },
          bio: "Epistemology, minds, & physical/abstract reality. Critical Rationalist. Friendly contrarian MORE BIO BIO BIO BIO BIO BIO BIO BIO BIO BIO...",
          artefacts: {
            twitterIcon: "",
            githubIcon: "",
            linkedinIcon: "",
          },
        });
      })
  }, []);

  return (
    <div className="container">
      <Profile 
        profilePic={profilePic}
        name={name}
        contactInfo={contactInfo}
        bio={bio}
        artefacts={artefacts}
      />
      <ProjectBox/>
      <HomeButton/>
    </div>
  );
}

export default Portfolio;
