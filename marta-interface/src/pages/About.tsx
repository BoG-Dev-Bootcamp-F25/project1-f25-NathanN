// follow figma
import { Link } from 'react-router-dom';
import '../App.css';
import marta_logo from "../assets/marta_logo.png";
import marta_map from "../assets/marta_map.png";




export default function About() {
    return (
        <div>
            <Link to="/" className = 'flex justify-center border-b-2'>
                <img src = {marta_logo} alt ='marta logo' className="w-1/4 hover:cursor-pointer"></img>
            </Link>                
            <h1 className='text-6xl ml-6'>About MARTA:</h1>
            <div className ='flex flex-row p-3 text-justify gap-20'>
                <p className='text-2xl border-2 mt-5 rounded-xl mr-3 ml-3 h-fit w-3/4 p-3'>The Metropolitan Atlanta Rapid Transit Authority (MARTA /ˈmɑːrtə/) is the principal public transport operator in the Atlanta metropolitan area. Formed in 1971 as strictly a bus system, MARTA operates a network of bus routes linked to a rapid transit system consisting of 48 miles (77 km) of rail track with 38 subway stations. MARTA's rapid transit system is the eighth-largest rapid transit system in the United States by ridership.

MARTA operates almost exclusively in Fulton, Clayton, and DeKalb counties, although they maintain bus service to two destinations in neighboring Cobb County (Six Flags Over Georgia and the Cumberland Transfer Center next to the Cumberland Mall which offers a connection to many CobbLinc bus services), while Doraville station serves portions of Gwinnett County via Ride Gwinnett buses. MARTA also operates MARTA Mobility, a separate paratransit service for disabled customers.</p>
                <img src={marta_map} alt='map' className='w-1/3'></img>
            </div>
        </div>
    )
}