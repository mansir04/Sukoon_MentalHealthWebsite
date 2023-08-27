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
        <Design />
        <div className="helpline-container">
      <h2>Helpline Numbers  :  1800-599-0019   102</h2>

    </div>
        <h1>A One Stop Solution For All Your Mental Health Needs !</h1>
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
        <Home_info />
        <Logoslider />
      </div>
    );
  }; 
export default Home;
