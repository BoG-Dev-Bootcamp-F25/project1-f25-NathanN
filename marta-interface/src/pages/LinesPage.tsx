// This page will display the entire interface
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import TrainList from '../components/TrainList';
// import Navbar from '../components/Navbar';
import '../App.css';


/* 
This component should have a prop specifying the line color (i.e. blue, gold, red, or green), and would contain the interface for all trains in the given line. 
The current line that's being displayed should be stored as a state in the LinesPage component. Here's some barebones code for some idea of what the structure should look like:
*/

// useEffect(() => {
//         fetch("[URL]")
//         .then(response => response.tsxon())
//         .then(data => setData(data))
//       },[])

const URL: string = "https://midsem-bootcamp-api.onrender.com/arrivals/";

export default function LinesPage() {
  // initialize some currColor state
  const [currColor, setCurrColor] = useState('GOLD');
  const [trainData, setData] = useState([]);
  const [loading, setLoading] = useState(true); // condtional rendering
  useEffect(() => {
    setLoading(true);
    fetch(`${URL}${currColor}`)
      .then(response => response.json())
      .then(data => setData(data)) // set train data
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  },[currColor])
  const handleColor = (color: string) => {
    setCurrColor(color);
  }
  if (loading) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
        <button onClick={() => handleColor('GOLD')} > Gold </button>
        <button onClick={() => handleColor('RED')} > Red </button>
        <button onClick={() => handleColor('BLUE')} > Blue </button>
        <button onClick={() => handleColor('GREEN')} > Green </button>
        <h1 className = 'capitalize'>{currColor}</h1>
        <TrainList Trains={trainData} />
    </div>
  );
}
