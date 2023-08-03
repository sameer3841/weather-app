import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2fea0b10fde592927e181c8110c2144a`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      })
      searchLocation('')
    }
  }
  
  return (

    <div class="app">
      <div class="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'
        />
      </div>
      <div class="container">
        <div class="top">
          <div class="location">
            <p>{data.name}</p>
            </div>
          <div class="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div class="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
        <div class="bottom">
          <div class="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div class="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
          </div>
          <div class="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p>Wind</p>
          </div>
        </div>
      }

      
      </div>
    </div>
  );
}

export default App;
