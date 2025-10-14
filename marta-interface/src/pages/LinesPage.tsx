// This page will display the entire interface
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import TrainList from '../components/TrainList';
import Train, { type TrainData} from "../components/Train";
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
  const [trainData, setData] = useState<TrainData[]>([]);
  const [loading, setLoading] = useState(true); // condtional rendering

  const [arriveFilter, setArriveFilter] = useState(false);
  const [scheduledFilter, setScheduledFilter] = useState(false);
  const [northFilter, setNorthFilter] = useState(false);
  const [eastFilter, setEastFilter] = useState(false);
  const [southFilter, setSouthFilter] = useState(false);
  const [westFilter, setWestFilter] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}${currColor}`)
      .then(response => response.json())
      .then(data => setData(data)) // set train data
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  },[currColor])
  let displayedRides = trainData;

  const handleColor = (color: string) => {
    setCurrColor(color);
    setArriveFilter(false);
    setScheduledFilter(false);
    setEastFilter(false);
    setWestFilter(false);
    setNorthFilter(false);
    setSouthFilter(false);
  };
  if(arriveFilter) {
    displayedRides = displayedRides.filter((train) => train.WAITING_TIME === "Arriving");
  }
  if(scheduledFilter) {
    displayedRides = displayedRides.filter((train) => train.WAITING_TIME !== "Arriving");
  }
  if(eastFilter) {
    displayedRides = displayedRides.filter((train) => train.DIRECTION === "E");
  }
  if(westFilter) {
    displayedRides = displayedRides.filter((train) => train.DIRECTION === "W");
  }
  if(northFilter) {
    displayedRides = displayedRides.filter((train) => train.DIRECTION === "N");
  }
  if(southFilter) {
    displayedRides = displayedRides.filter((train) => train.DIRECTION === "S");
  }
  const filterByArrive = () => {
    setArriveFilter(prev => !prev); // nots state 
    setScheduledFilter(false);
  };
  const filterByScheduled = () => {
    setScheduledFilter(prev => !prev); 
    setArriveFilter(false);
  };
  const filterByEast= () => {
    setEastFilter(prev => !prev); 
    setWestFilter(false);
  };
  const filterByWest = () => {
    setWestFilter(prev => !prev);  
    setEastFilter(false);
  };
  const filterByNorth = () => {
    setNorthFilter(prev => !prev); 
    setSouthFilter(false);
  };
  const filterBySouth = () => {
    setSouthFilter(prev => !prev); 
    setNorthFilter(false);
  };
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
        <button onClick={filterByArrive} > Arriving </button>
        <button onClick={filterByScheduled} > Scheduled </button>
        {(currColor === 'GREEN' || currColor === 'BLUE') && (
        <>
          <button onClick={filterByEast} > Eastbound </button>
          <button onClick={filterByWest} > Westbound </button>
        </>
        )}
        {(currColor === 'GOLD' || currColor === 'RED') && (
          <>
            <button onClick={filterByNorth} > Northbound </button>
            <button onClick={filterBySouth} > Southbound </button>
          </>
        )}
        <TrainList Trains={displayedRides} />
    </div>
  );
}
