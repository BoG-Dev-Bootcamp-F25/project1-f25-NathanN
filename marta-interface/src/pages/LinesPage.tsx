// This page will display the entire interface
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import TrainList from '../components/TrainList';
import { type TrainData } from "../components/Train";
import Navbar from '../components/Navbar';
// import { type Station } from "../components/Navbar";
import '../App.css';
import marta_logo from "../assets/marta_logo.png";


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
const stationURL: string = "https://midsem-bootcamp-api.onrender.com/stations/";

const arriveActive = (arriving: boolean) => {
  if (arriving) {
    return 'bg-green-400';
  }
}
const scheduledActive = (scheduled: boolean) => {
  if (scheduled) {
    return 'bg-green-400';
  }
}
const northActive = (north: boolean) => {
  if (north) {
    return 'bg-green-400';
  }
}
const southActive = (south: boolean) => {
  if (south) {
    return 'bg-green-400';
  }
}
const eastActive = (east: boolean) => {
  if (east) {
    return 'bg-green-400';
  }
}
const westActive = (west: boolean) => {
  if (west) {
    return 'bg-green-400';
  }
}
export default function LinesPage() {
  // initialize some currColor state
  const {color} = useParams();

  const [currColor, setCurrColor] = useState(color?.toUpperCase() || 'GOLD');
  const [trainData, setData] = useState<TrainData[]>([]);
  const [loading, setLoading] = useState(true); // condtional rendering
  const [stationData, setStationData] = useState<any[]>([]);
  const [currStation, setStation] = useState<string | null> (null);

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

  useEffect(() => {
    setLoading(true);
    fetch(`${stationURL}${currColor}`)
      .then(response => response.json())
      .then(data => setStationData(data)) // set station data
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
    setStation(null);
  };
  const handleStation = (station : string | null) => {
    if (station === currStation) {
      setStation(null);
    } else {
      setStation(station);
    }
  }
  if(currStation) {
    displayedRides = displayedRides.filter((train) => train.STATION.toUpperCase().includes(currStation.toUpperCase()));
  }
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
        <div className ='border-b-2'>
            <Link to="/" className = 'flex justify-center'>
              <img src = {marta_logo} alt ='marta logo' className="w-1/4 hover:cursor-pointer"></img>
            </Link>
        </div>
        <div className='flex justify-evenly p-4 border-b-2'>
          <button onClick={() => handleColor('GOLD')} className ='bg-yellow-400 color-button'> Gold </button>
          <button onClick={() => handleColor('RED')} className ='bg-red-500 color-button'> Red </button>
          <button onClick={() => handleColor('BLUE')} className ='bg-blue-500 color-button'> Blue </button>
          <button onClick={() => handleColor('GREEN')} className ='bg-green-400 color-button'> Green </button>
        </div>
        {/* <hr className='mx-auto'></hr> */}
        <h1 className = 'capitalize flex justify-center font-bold text-5xl m-3'>{currColor}</h1>
        {/* <hr className=''></hr> */}
        <div className ='flex flex-row border-t-2'>
          <Navbar STATIONS = {stationData} selectStation={currStation} onStationClk={handleStation} />
          <div>
            <div className='flex flex-row w-full gap-12 p-2 border-b-2 px-30'>
              <button onClick={filterByArrive} className = {`filter-button ${arriveActive(arriveFilter)}`}> Arriving </button>
              <button onClick={filterByScheduled} className = {`filter-button ${scheduledActive(scheduledFilter)}`}> Scheduled </button>
              {(currColor === 'GREEN' || currColor === 'BLUE') && (
              <>
                <button onClick={filterByEast} className = {`filter-button ${eastActive(eastFilter)}`}> Eastbound </button>
                <button onClick={filterByWest} className = {`filter-button ${westActive(westFilter)}`}> Westbound </button>
              </>
              )}
              {(currColor === 'GOLD' || currColor === 'RED') && (
                <>
                  <button onClick={filterByNorth} className =  {`filter-button ${northActive(northFilter)}`}> Northbound </button>
                  <button onClick={filterBySouth} className = {`filter-button ${southActive(southFilter)}`}> Southbound </button>
                </>
              )}
            </div>
            {/* <hr className='absolute left-0 w-full '></hr> */}
            <TrainList Trains={displayedRides} />
          </div>
        </div>

        
    </div>
  );
}
