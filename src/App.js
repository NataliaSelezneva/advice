import './App.css';
import video from './video.mp4';
import { useEffect, useState } from 'react';

function App() {

  const [advice, setAdvice] = useState('');

  const getAdvice = async () =>{
          const responce = await fetch ('https://www.boredapi.com/api/activity/');
          const data = await responce.json();
          setAdvice(data.activity);
  }

  useEffect(()=>{
    getAdvice()
  }, [])

  return (
    <div className="container">
      <video autoPlay muted loop><source src={video} type='video/mp4' /></video>
      <div className='block-advice'>
      <p className='style-advice'>{advice}</p>
      <p><button className='style-button' onClick={getAdvice}>Get advice</button></p>
      </div>
    </div>
  );
}

export default App;
