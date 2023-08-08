import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logoslider from '../components/logoslider';


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
    <>
    <h1>A One Stop Solution For All Your Mental Health Needs !</h1>
    {'\n'}
    {'\n'}

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
    <Logoslider/>
    </>
  );
};

export default Home;
