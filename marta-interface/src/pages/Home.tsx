// follow figma
import { Link } from 'react-router-dom';
import '../App.css';
import marta_logo from "../assets/marta_logo.png";
import marta_train from "../assets/marta_train.jpg";


export default function Home() {
    return (
        <div>
            <div className ='flex items-center border-b-2 p-2'>
                <div className='w-1/3 ml-2'></div>
                <Link to="/" className = 'flex justify-center'>
                    <img src = {marta_logo} alt ='marta logo' className="w-1/2 hover:cursor-pointer"></img>
                </Link>                
                <Link to="/about" className='flex justify-end w-1/3 hover:cursor-pointer text-4xl font-semibold mr-2'>
                    About MARTA
                </Link>
            </div>
            <div className ='flex flex-row justify-evenly mt-20'>
                <div>
                    <h1 className='font-bold text-5xl mb-13'>VIEW ROUTES SCHEDULE</h1>
                    <div className="flex flex-col">
                        <Link to="/lines/gold" className='homepage-button'>
                        Gold
                        </Link>
                        <hr className='w-3/4'></hr>
                        <Link to="/lines/red" className='homepage-button'>
                        Red
                        </Link>
                        <hr className='w-3/4'></hr>
                        <Link to="/lines/blue" className='homepage-button'>
                        Blue
                        </Link>
                        <hr className='w-3/4'></hr>
                        <Link to="/lines/green" className='homepage-button'>
                        Green
                        </Link>
                        <hr className='w-3/4'></hr>
                    </div>
                </div>
                <img src={marta_train} alt='marta train' className='w-1/2'></img>
            </div>
        </div>
    )
}