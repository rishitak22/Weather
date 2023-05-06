import React, {useState} from 'react'
import axios from 'axios'

function App() {
    //const url="https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={1860a1ce85bacbe88e7fc77415d9bfd2}"
    return
    {
        <div className="app">
             <div className="container">
                 <div className="top">
                     <div className="location">
                        <p>India</p>
                     </div>
                     <div className="temp">
                        <h1>60*F</h1>
                     </div>
                     <div className="description">
                        <p>Cloud</p>
                     </div>
                 </div>
                 <div className="bottom"></div>
                 <div className="feels">
                    <p>65*F</p>
                 </div>
                 <div className="humidity">
                    <p>20%</p>
                 </div>
                 <div className="wind">
                    <p>12MPH</p>
                 </div>

             </div>
        </div>
    };
}

export default App;