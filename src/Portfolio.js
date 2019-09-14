import React, {useState, useEffect} from 'react';
import axios from "axios";
import Profile from "./components/Profile";
import './Portfolio.css';

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
          bio: "Epistemology, minds, & physical/abstract reality. Critical Rationalist. Friendly contrarian.",
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
    </div>
  );
}

export default Portfolio;
