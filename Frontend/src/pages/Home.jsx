import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logoslider from '../components/Logoslider';
import Home_info from '../components/Home_info';
import Design from "../components/ParticleDesign";
import img1 from '../images/jokeBGImg4.jpg';

const Home = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data.setup + ' ' + response.data.punchline);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

    return (
      <div className='home-page'>
        <div className="helpline-container">
        <h3 className="marquee" style={{ color: 'crimson' }}>
          Helpline Numbers under the Tele-MANAS Programme : ☎️ 14416 or 📞 1-800 891 4416
        </h3>
      </div>
        <div className='home-allcontent'>
        {/* <Design /> */}
        
        <div className='home-project-intro-heading'>
          <u></u>
        </div>

        <div className='home-project-intro'>
        <p>
        </p>
        </div>

        <div className='home-project-intro-image'>
          <img src={img1}></img>
        </div>
        
        <div className='home-project-intro-quote'>
        <p>
          "In the journey of life, may you find solace, laughter, and the companionship of kindred souls."
        </p>
        </div>

        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              {/* <div className='joke-text'>
                <p>Start Your Day With Us and a Smile 😊 </p>
              </div> */}
              <p>{joke}</p>
            </blockquote>
          </header>
        </div>
         <div className='home-project-intro'>
        <p>
          We hope you enjoy our jokes as much as we do. 
          Sukoon has many such resources to make you smile even when you feel you can't. We also offer a variety of other resources to help you 
          understand yourself better. After all we all deserve to know what is going inside us. 
        </p>
        </div>

        <Home_info />
        {/*
        <div className='home-project-intro'>
        <p>
          The team at Sukoon realises we can't do it all. We actively select the right resources and 
          organisations where you can find help other than our own to make sure you have everything 
          you could ever need. 
        </p>
        </div>
    */}
        <Logoslider />
        </div>
      </div>
    );
  }; 
export default Home;

