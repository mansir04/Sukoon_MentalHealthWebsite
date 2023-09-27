import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logoslider from '../components/Logoslider';
import Home_info from '../components/Home_info';
import Design from "../components/ParticleDesign";

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
        <Design />
        
        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              <div className='joke-text'>
                <p>Start Your Day With Us and a Smile 😊 </p>
              </div>
              <p>{joke}</p>
            </blockquote>
          </header>
        </div>

        <div className='home-project-intro'>
        <h1>Sukoon </h1>
          <h3 style={{ color: 'blue' }}>Embrace, Empower, Elevate</h3>
        <h4>
        <p>
          Sukoon emerged from a deep concern for the well-being of Indian youth, driven by the rising mental health 
          challenges and suicides. Our mission centers on you, the user, and our commitment to offering 
          clear and meaningful support. In a world filled with confusion and loneliness, we want you to 
          discover a path to joy and connection. Here's a heartfelt message from our team: "In the 
          journey of life, may you find solace, laughter, and the companionship of kindred souls."
        </p>
        </h4>
        </div>

        <Home_info />
        <Logoslider />
        </div>
      </div>
    );
  }; 
export default Home;

