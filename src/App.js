import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';
function App() {
  const [pic, setPic] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();

  const fetchPhoto = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=9DSJJ5TmE1Vs2hLKmfyecx26QDjlRckOdzaSiNqF',
      )
      .then(res => {
        console.log(res.data);
        setPic(res.data.url);
        setTitle(res.data.title);
        setExplanation(res.data.explanation);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className='App'>
      <div className='titleContainer'>{title}</div>
      <div className='imgContainer'>
        <img src={pic} alt='pic of the day' />
      </div>
      <div className='explanationContainer'>{explanation}</div>
    </div>
  );
}

export default App;
