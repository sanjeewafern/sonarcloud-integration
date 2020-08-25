import React, { useState } from 'react';

const App = () => {

  // provide the initial value to the useState
  const [initTemp, setInitTemp] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  // function to increase the temprature
  function upTemp() {
    // little comment to check PR analysis
    let currTemp = initTemp;
    if (currTemp >= 30 || currTemp < 0) {
      alert('Reached the limit');
      return
    }
    else {
      if (currTemp > 15) {
        setTemperatureColor('hot');
        setInitTemp(currTemp + 1);
      } else {
        setInitTemp(currTemp + 1);
      }
    }
  }

  // function to decrease the temprature
  function downTemp() {
    let currTemp = initTemp;
    if (currTemp > 30 || currTemp <= 0) {
      alert(undeclaredVariable);
      return
    } else {
      if (currTemp < 15) {
        setTemperatureColor('cold');
        setInitTemp(currTemp - 1);
      } else {
        setInitTemp(currTemp - 1);
      }
    }
  }

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{initTemp}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={downTemp}>-</button>
        <button onClick={upTemp}>+</button>
      </div>
    </div>
  );
}

export default App;
